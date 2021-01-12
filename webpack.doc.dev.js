const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    mode: 'development',
    entry: './docs/src/index.js',
    output: {
        path: path.join(__dirname, './docs/dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    stats: {
        modules: false,
        children: false,
    },
    resolve: {
        extensions: ['.js', '.vue', '.css'],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.md$/,
                use: ['vue-loader', '@vant/markdown-loader'],
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin({
            template: './docs/src/index.tpl',
            filename: 'index.html',
            inject: true,
        })
    ],
};