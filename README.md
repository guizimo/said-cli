
<p align="center"><a href="https://github.com/guizimo/said-cli" target="_blank" rel="said-cli"><img src="https://guizimo.oss-cn-shanghai.aliyuncs.com/img/said.png" alt="said-cli" /></a></p>


<div align="center">

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Rollup](https://img.shields.io/badge/Packing-Rollup-FF3333.svg)](https://github.com/guizimo/said-cli)
[![Typescript](https://img.shields.io/badge/Language-Typescript-3078C6.svg)](https://github.com/guizimo/said-cli)
[![Version](https://img.shields.io/npm/v/said-cli.svg?sanitize=true)](https://www.npmjs.com/package/said-cli)
[![Downloads](https://img.shields.io/npm/dm/said-cli.svg?sanitize=true)](https://www.npmjs.com/package/said-cli)
[![License](https://img.shields.io/github/license/guizimo/said-cli)](https://github.com/guizimo/said-cli/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/guizimo/said-cli)](https://github.com/guizimo/said-cli)

</div>


## ✨ 介绍

`said-cli` 是一个快速拉取模板的脚手架工具，旨在简化和加速项目的初始化过程。无论是创建新的前端项目、后端项目还是其他类型的项目，`said-cli` 都能帮助你迅速搭建基础结构。

## 特性

- 🛠️ 快速拉取模板项目
- 📦 支持多种语言和框架（如Vue、React、Node.js、Rollup等）
- ⚡ 高效的项目初始化
- 🔄 模板丰富，更新迅速
- 🔧 简单的配置和自定义

## 开发

安装依赖

```shell
pnpm i
```

运行

```shell
pnpm run dev
```

打包生成构建产物

```shell
pnpm run build
```

本地软链接命令调试

```shell
pnpm run link
```

## 调试

把命令注册到全局，方便调试使用

```shell
npm link
```

查看所有被链接的全局 `Node.js` 包

```shell
npm ls -g --link
```

删除项目中的链接

```shell
npm unlink
```

删除全局的链接

```shell
npm unlink -g  said-cli
```

## 使用

使用`said-cli`创建一个新项目非常简单。以下是基本使用方法：

```
said-cli create <project-name>
```

例如，创建一个名为`my-new-project`的项目：

```
said-cli create my-new-project
```

## 可用模板

以下是一些可用的模板：

| 模板名称          | 模板简介                                  | 模版地址                                              |
| ----------------- |---------------------------------------| ----------------------------------------------------- |
| rollup-library-ts | `Rollup + Ts`项目模板，可用于快速开发命令行工具、库、插件等。 | https://github.com/SaidBaseTemplate/rollup-library-ts |
| rollup-base-ts    | `Rollup + Ts`基础模版，快速搭建基于`Rollup + Ts`的模板，快速开发 | https://github.com/SaidBaseTemplate/rollup-base-ts    |
|      vue3-ts             |            `vue3-ts` 是一个基于` Vite` 和 `TypeScript` 的`Vue3`项目模板，可用于快速开发`Vue3 + Ts`的前端项目            |              https://github.com/SaidBaseTemplate/vue3-ts                                         |
| electron-vue3-ts | `electron-vue3-ts` 是一个基于 `Vite` 、`Vue3`和 `TypeScript` 的`Electron`项目模板，可用于快速开发`Electron + Vue3 + Ts`的前端项目。 | https://github.com/SaidBaseTemplate/electron-vue3-ts.git |
| vue3-uniapp-ts | `vue3-uniapp-ts` 是一个基于 `Uniapp` 和 `TypeScript` 的项目模板，可用于快速搭建项目。 | https://github.com/SaidBaseTemplate/vue3-uniapp-ts.git |

欢迎大家一起完善`said-cli`的模板！

## 更新日志

[**Changelog**](./CHANGELOG.md) - 查看项目的更新日志

## 贡献

欢迎任何形式的贡献！你可以通过以下方式贡献代码：

1. Fork 此仓库
2. 创建你的功能分支 (git checkout -b feature/fooBar)
3. 提交你的更改 (git commit -am 'Add some fooBar')
4. 推送到分支 (git push origin feature/fooBar)
5. 创建一个新的Pull Request

## 许可

该项目基于 MIT 许可证。详情请参阅 [LICENSE](https://github.com/guizimo/said-cli/blob/main/LICENSE) 文件。

## 联系

如果你有任何问题或建议，请通过以下方式联系我：

- **Email**:  17680262548@163.com

- **GitHub Issues**: [这里](https://github.com/guizimo/said-cli/issues)



感谢你使用`said-cli`！希望它能帮助你更快地启动和开发项目。





