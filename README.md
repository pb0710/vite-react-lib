# Vite React Libary

## 文档

[简体中文]()

## 简介

### 说明

一个基于 vite 的 react 库开发脚手架，支持 typescript。

### 目录结构

```
.
├── README.md
├── dist  // 库文件打包后目录
│   ├── Button.d.ts // Typescript 类型声明文件
│   ├── index.d.ts  // Typescript 类型声明文件
│   ├── vite-react-lib.es.js  // ESModule js 文件
│   ├── vite-react-lib.es.js.map // Source Map
│   ├── vite-react-lib.umd.js // UMD js 文件
│   └── vite-react-lib.umd.js.map // Source Map
├── example // 项目 Demo 目录
│   ├── index.html
│   ├── package.json
│   ├── src // Demo 源码
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── favicon.svg
│   │   ├── index.css
│   │   ├── logo.svg
│   │   └── main.jsx
│   ├── vite.config.js
│   └── yarn.lock
├── index.html
├── package.json
├── scripts
│   └── watch.js
├── src // 库文件源码
│   ├── Button.tsx
│   ├── index.css
│   └── index.tsx
├── tsconfig.json
├── vite.config.ts // 库 Vite 配置文件
└── yarn.lock
```

## 开始

进入库目录。

```bash
cd vite-react-lib
```

yarn 安装依赖（这里需要安装库的依赖，以及 demo 依赖）。

```bash
yarn && cd example && yarn && cd ../
```

或 npm，同理。

```bash
npm i && cd example && npm i && cd ../
```

## 调试

开启库源码监听。

```bash
yarn watch
```

然后启动 example 目录的 Demo 服务。

```bash
cd example
```

```bash
yarn dev
```

## 打包

库文件打包目录为 dist。

```bash
yarn build
```

## 发布

修改版本号。

**package.json**

```json
{
  "version": "0.1.0"
}
```

登录 npm 账户。

```bash
npm publish
```

发布。

```bash
npm publish
```
