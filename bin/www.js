#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import * as path from 'path';
import ora from 'ora';
import gitClone from 'git-clone';
import figlet from 'figlet';

// 库名称
const LIBRARY_NAME = 'said-cli';
// issue 地址
const ISSUE_ADDRESS = 'https://github.com/guizimo/said-cli/issues';

/**
 * 命令类
 */
class Commands {
    constructor() {
        this.main = LIBRARY_NAME;
    }
    /**
     * 对外暴露，获取命令集
     */
    resolve() {
        return {
            create: {
                alias: '',
                description: 'Quickly create a project.',
                examples: [this.main + 'create <project-name>']
            }
        };
    }
}

var name = "said-cli";
var version = "0.0.13";
var description = "Quickly generate scaffolding for project templates";
var main$1 = "bin/www.js";
var type = "module";
var scripts = {
	dev: "rimraf bin && rollup -c rollup.config.js -w",
	build: "rimraf bin && rollup -c rollup.config.js",
	"test:link": "npm unlink -g said-cli && npm link",
	release: "standard-version",
	"release:major": "standard-version --release-as major",
	"release:minor": "standard-version --release-as minor",
	format: "prettier --write .",
	prepare: "husky install"
};
var bin = {
	"said-cli": "./bin/www.js"
};
var keywords = [
	"rollup",
	"ts",
	"library",
	"template",
	"base"
];
var repository = {
	type: "git",
	url: "https://github.com/guizimo/said-cli.git"
};
var homepage = "github.com/guizimo/said-cli#readme";
var publishConfig = {
	registry: "https://registry.npmjs.org/"
};
var author = "guizimo";
var license = "MIT";
var devDependencies = {
	"@babel/core": "^7.24.7",
	"@babel/plugin-proposal-class-properties": "^7.18.6",
	"@babel/preset-env": "^7.24.7",
	"@commitlint/cli": "^19.3.0",
	"@commitlint/config-conventional": "^19.2.2",
	"@rollup/plugin-alias": "^5.1.0",
	"@rollup/plugin-babel": "^6.0.4",
	"@rollup/plugin-commonjs": "^26.0.1",
	"@rollup/plugin-json": "^6.1.0",
	"@types/figlet": "^1.5.8",
	"@types/fs-extra": "^11.0.4",
	"@types/git-clone": "^0.2.4",
	"@types/inquirer": "^9.0.7",
	commitizen: "^4.3.0",
	"cz-conventional-changelog": "^3.3.0",
	husky: "^9.0.11",
	"lint-staged": "^15.2.7",
	prettier: "^3.3.2",
	rimraf: "^5.0.7",
	rollup: "^4.18.0",
	"rollup-plugin-typescript2": "^0.36.0",
	"standard-version": "^9.5.0",
	tslib: "^2.6.3",
	typescript: "^5.4.5"
};
var dependencies = {
	chalk: "^5.3.0",
	commander: "^12.1.0",
	figlet: "^1.7.0",
	"fs-extra": "^11.2.0",
	"git-clone": "^0.2.0",
	inquirer: "^9.2.23",
	ora: "^8.0.1"
};
var myPkg = {
	name: name,
	version: version,
	description: description,
	main: main$1,
	type: type,
	scripts: scripts,
	bin: bin,
	keywords: keywords,
	repository: repository,
	homepage: homepage,
	publishConfig: publishConfig,
	author: author,
	license: license,
	devDependencies: devDependencies,
	dependencies: dependencies,
	"lint-staged": {
	"**/*.{js,ts,json}": "prettier --write ."
}
};

/**
 * 打印
 * @param type 类型
 * @param msg 信息
 * @param bold 是否加粗
 */
const chalkLog = (type, msg, bold) => {
    let color = 'yellow';
    if (type === 'success')
        color = 'green';
    else if (type === 'info')
        color = 'blue';
    else if (type === 'error')
        color = 'red';
    // @ts-ignore
    const handler = bold ? chalk.bold[color](msg) : chalk[color](msg);
    return console.log(handler);
};
/**
 * 日志类
 */
class Logger {
    // 成功
    success(msg, bold = false) {
        return chalkLog('success', msg, bold);
    }
    // 输出
    info(msg, bold = false) {
        return chalkLog('info', msg, bold);
    }
    // 警告
    warn(msg, bold = false) {
        return chalkLog('warn', msg, bold);
    }
    // 错误
    error(msg, bold = false) {
        return chalkLog('error', msg, bold);
    }
}

// 初始化日志服务
const logger$2 = new Logger();
// 模板映射
const templateMap = [
    {
        name: 'rollup-library-ts',
        value: 'rollup-library-ts'
    },
    {
        name: 'rollup-base-ts',
        value: 'rollup-base-ts'
    },
    {
        name: 'vue3-ts',
        value: 'vue3-ts'
    },
    {
        name: 'electron-vue3-ts',
        value: 'electron-vue3-ts'
    },
    {
        name: 'vue3-uniapp-ts',
        value: 'vue3-uniapp-ts'
    }
];
// 模板列表
const templateList = [
    {
        name: 'rollup-library-ts',
        description: 'Rollup+Ts 命令行工具模板',
        url: 'https://github.com/SaidBaseTemplate/rollup-library-ts.git',
        successFn: (projectName) => {
            logger$2.info('Run the following command to start the project:', true);
            logger$2.info('', true);
            logger$2.info(`cd ${projectName}`, true);
            logger$2.info('npm i', true);
            logger$2.info('npm run dev', true);
        }
    },
    {
        name: 'rollup-base-ts',
        description: 'Rollup+Ts 基础模板',
        url: 'https://github.com/SaidBaseTemplate/rollup-base-ts.git',
        successFn: (projectName) => {
            logger$2.info('Run the following command to start the project:', true);
            logger$2.info('', true);
            logger$2.info(`cd ${projectName}`, true);
            logger$2.info('npm i', true);
            logger$2.info('npm run dev', true);
        }
    },
    {
        name: 'vue3-ts',
        description: 'Vue3+Ts 基础模板',
        url: 'https://github.com/SaidBaseTemplate/vue3-ts.git',
        successFn: (projectName) => {
            logger$2.info('Run the following command to start the project:', true);
            logger$2.info('', true);
            logger$2.info(`cd ${projectName}`, true);
            logger$2.info('npm i', true);
            logger$2.info('npm run dev', true);
        }
    },
    {
        name: 'electron-vue3-ts',
        description: 'Electron+Vue3+Ts 基础模板',
        url: 'https://github.com/SaidBaseTemplate/electron-vue3-ts.git',
        successFn: (projectName) => {
            logger$2.info('Run the following command to start the project:', true);
            logger$2.info('', true);
            logger$2.info(`cd ${projectName}`, true);
            logger$2.info('npm i', true);
            logger$2.info('npm run dev', true);
        }
    },
    {
        name: 'vue3-uniapp-ts',
        description: 'Uniapp+Vue3+Ts 基础模板',
        url: 'https://github.com/SaidBaseTemplate/vue3-uniapp-ts.git',
        successFn: (projectName) => {
            logger$2.info('Run the following command to start the project:', true);
            logger$2.info('', true);
            logger$2.info(`cd ${projectName}`, true);
            logger$2.info('npm i', true);
            logger$2.info('npm run dev', true);
        }
    }
];

// 初始化日志服务
const logger$1 = new Logger();
// 欢迎信息
const welcomeMessage = () => {
    logger$1.info('');
    logger$1.info(figlet.textSync(LIBRARY_NAME, {}), true);
    logger$1.info(`Welcome to ${LIBRARY_NAME}!`);
    logger$1.info('');
};
// 结束信息
const endMessage = () => {
    logger$1.info('');
    logger$1.info(`Thank you for your use ${LIBRARY_NAME}!`, true);
};
// 错误信息
const errorMessage = () => {
    logger$1.info('');
    logger$1.info(`If the above does not solve your problem, please check here: ${ISSUE_ADDRESS}!`, true);
};

// 初始化日志服务
const logger = new Logger();
/**
 * 创建项目指令
 * @param params 参数
 */
const createExec = async (params) => {
    try {
        welcomeMessage();
        const projectName = validateParams(params);
        await validateProjectName(projectName);
        await selectProjectAndDownload(projectName);
    }
    catch (e) {
        logger.error(e.message);
        errorMessage();
        process.exit(0);
    }
};
/**
 * 选择项目模板
 * @param projectName 项目名称
 */
const selectProjectAndDownload = async (projectName) => {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            message: 'Select a project template.',
            default: 'rollup-library',
            name: 'template',
            choices: templateMap
        }
    ]);
    // 拼接项目模板
    const find = templateList.find((item) => item.name === answer.template);
    if (find) {
        // 显示加载条
        const spinner = ora('Downloading template...').start();
        // 拉取git仓库代码
        gitClone(find.url, projectName, { checkout: 'main' }, () => {
            // 删除 .git 文件夹
            const gitDir = path.join(process.cwd(), `/${projectName}/.git`);
            if (fs.existsSync(gitDir)) {
                fs.rmSync(gitDir, { recursive: true });
            }
            // 结束加载条并显示成功消息
            spinner.succeed(chalk.green.bold('The project was created successfully!'));
            // 展示信息
            find.successFn(projectName);
            endMessage();
        });
    }
    else {
        throw new Error('The template not exist!');
    }
};
/**
 * 校验参数
 * @param params 参数
 */
const validateParams = (params) => {
    if (!params[0]) {
        throw new Error('Please enter a project name!');
    }
    // 只取第一个参数
    return params[0];
};
/**
 * 判断当前目录下是否存在同名文件
 * @param name 名称
 */
const validateProjectName = async (name) => {
    const targetPath = path.join(process.cwd(), name);
    if (fs.existsSync(targetPath)) {
        const answer = await inquirer.prompt([
            {
                message: 'The project already exists, do you want to overwrite it?',
                type: 'confirm',
                name: 'isOver',
                default: 'false'
            }
        ]);
        if (answer.isOver) {
            fs.removeSync(targetPath);
        }
        else {
            throw new Error('Cancel the operation!');
        }
    }
};

// 导出模块
var execs = {
    create: createExec
};

function main() {
    // 初始化日志
    const logger = new Logger();
    // 初始化命令行参数
    program.name(LIBRARY_NAME).description('A scaffolding tool for quickly pulling project templates.');
    // 配置版本信息
    program.version(LIBRARY_NAME + '@' + myPkg.version).usage('<command> [option]');
    // 初始化命令行参数
    const commands = new Commands();
    // 获取命令列表
    const commandResolves = commands.resolve();
    for (let key in commandResolves) {
        const { alias, description } = commandResolves[key];
        program
            .command(key) // 注册命令
            .alias(alias) // 配置命令别名
            .description(description) // 配置命令描述
            .action(function (name, { args }) {
            try {
                // 未注册的命令
                if (key === '*')
                    return logger.error(description);
                // 执行命令
                // @ts-ignore
                return execs[key](args);
            }
            catch (e) {
                logger.error('Unrecognized commands "' + key + '".');
            }
        });
    }
    // 解析命令行参数
    // @ts-ignore
    program.parse(program.argv);
}
// 执行主函数
main();
