const gulp = require('gulp');
const path = require('path');
const less = require('gulp-less');
const insert = require('gulp-insert');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const util = require('util');
const src = path.resolve(__dirname, '../packages');
const baseCssPath = path.resolve(__dirname, '../packages/common/index.wxss');
const libDir = path.resolve(__dirname, '../lib');
const esDir = path.resolve(__dirname, '../dist');
const exec = util.promisify(require('child_process').exec);
const libConfig = path.resolve(__dirname, '../tsconfig.lib.json');
const esConfig = path.resolve(__dirname, '../tsconfig.json');
const lessCompiler = (dist) =>
function compileLess() {
    return gulp
      .src(`${src}/**/*.less`)
      .pipe(less())
      .pipe(postcss())
      .pipe(insert.transform((contents, file) => {
        if (!file.path.includes('packages' + path.sep + 'common')) {
            const relativePath = path
              .relative(
                path.normalize(`${file.path}${path.sep}..`),
                baseCssPath
              )
              .replace(/\\/g, '/');
            contents = `@import '${relativePath}';${contents}`;
        }
        return contents;
      }))
        .pipe(rename({ extname: '.wxss' }))
        .pipe(gulp.dest(dist));
}
const tsCompiler = (dist, config) =>
    async function compileTs() {
        await exec(`npx tsc -p ${config}`);
        await exec(`npx tscpaths -p ${config} -s ../packages -o ${dist}`);
    };
const copier = (dist, ext) =>
    function copy() {
        return gulp.src(`${src}/**/*.${ext}`).pipe(gulp.dest(dist));
    };
const staticCopier = (dist) =>
    gulp.parallel(
        copier(dist, 'wxml'),
        copier(dist, 'wxs'),
        copier(dist, 'json')
    );
const cleaner = (path) =>
    function clean() {
        return exec(`npx rimraf ${path}`);
    };
const tasks = [
    ['buildEs', esDir, esConfig],
    ['buildLib', libDir, libConfig],
].reduce((prev, [name, ...args]) => {
    prev[name] = gulp.series(
        cleaner(...args),
        gulp.parallel(
            tsCompiler(...args),
            lessCompiler(...args),
            staticCopier(...args)
        )
    );
    return prev;
}, {})
module.exports = tasks;