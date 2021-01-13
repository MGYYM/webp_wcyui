# 快速上手

### 背景知识

使用 Wcyui Weapp 前，请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework/) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)，且了解[Vant weapp](https://vant-contrib.gitee.io/vant-weapp/#/intro)的基本用法。

## 安装

### 步骤一 通过 npm 安装

> 使用 npm 构建前，请先阅读微信官方的 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

```bash
# 通过 npm 安装
npm i webp_wcyui -S --production

# 通过 yarn 安装
yarn add webp_wcyui --production
```

### 步骤二 修改 app.json

将 app.json 中的 `"style": "v2"` 去除，小程序的[新版基础组件](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style)强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。

### 步骤三 修改 project.config.json

开发者工具创建的项目，`miniprogramRoot` 默认为 `miniprogram`，`package.json` 在其外部，npm 构建无法正常工作。

需要手动在 `project.config.json` 内添加如下配置，使开发者工具可以正确索引到 npm 依赖的位置。

```json
{
  ...
  "setting": {
    ...
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
    ]
  }
}
```
注意： 由于目前新版开发者工具创建的小程序目录文件结构问题，npm构建的文件目录为miniprogram_npm，并且开发工具会默认在当前目录下创建miniprogram_npm的文件名，所以新版本的miniprogramNpmDistDir配置为'./'即可

### 步骤四 构建 npm 包

打开微信开发者工具，点击 **工具 -> 构建 npm**，并勾选 **使用 npm 模块** 选项，构建完成后，即可引入组件。

<img style="width: 500px;" src="https://img.yzcdn.cn/public_files/2019/08/15/fa0549210055976cb63798503611ce3d.png" />

#### 安装 miniprogram-api-typings

```bash
# 通过 npm 安装
npm i -D miniprogram-api-typings

# 通过 yarn 安装
yarn add -D miniprogram-api-typings
```
### 示例工程

我们提供了一个[示例工程](https://github.com/MGYYM/webp_wcy_temp)，已经脚手架命令搭建基于webp_wcyui的工程

## 使用

### 基于示例工程

可以直接下载示例工程或者通过脚手架进行搭建，自动在依赖和`app.js`里添加了框架的支持

### 直接手动添加

下载项目依赖，后可在app.js里修改以下代码，来引入框架的依赖
```
 import {Whcy,appConfig} from "webp_wcyui"
 let baseConfig = {
     ...
     "onLaunch": function () {
         ...
         let whcy = new Whcy(`baseUrl`,this);
         this.whcy = whcy;
         ...
     }
     ...
 }
 baseConfig = Object.assign(baseConfig,appConfig);
 App(baseConfig)
```
> baseUrl为netWork的服务器基础路径


