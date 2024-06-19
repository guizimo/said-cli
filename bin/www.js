#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs-extra';
import * as path from 'path';
import ora from 'ora';
import gitClone from 'git-clone';
import figlet from 'figlet';

class Commands {
    constructor() {
        this.main = "said-cli";
    }
    /**
     * 对外暴露，获取命令集
     */
    resolve() {
        return {
            create: {
                alias: "",
                description: "Quickly create a project.",
                examples: [this.main + "create <project-name>"]
            },
        };
    }
}

var name = "said-cli";
var version = "0.0.1";
var description = "quickly generate scaffolding for project templates";
var main$1 = "bin/www.js";
var type = "module";
var scripts = {
	dev: "rimraf bin && rollup -c rollup.config.js -w",
	build: "rimraf bin && rollup -c rollup.config.js",
	link: "npm unlink -g said-cli && npm link"
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
	url: "https://github.com/SaidBaseTemplate/said-cli.git"
};
var author = "guizimo";
var license = "MIT";
var devDependencies = {
	"@babel/core": "^7.24.7",
	"@babel/plugin-proposal-class-properties": "^7.18.6",
	"@babel/preset-env": "^7.24.7",
	"@rollup/plugin-alias": "^5.1.0",
	"@rollup/plugin-babel": "^6.0.4",
	"@rollup/plugin-commonjs": "^26.0.1",
	"@rollup/plugin-json": "^6.1.0",
	"@types/figlet": "^1.5.8",
	"@types/fs-extra": "^11.0.4",
	"@types/git-clone": "^0.2.4",
	"@types/inquirer": "^9.0.7",
	rimraf: "^5.0.7",
	rollup: "^4.18.0",
	"rollup-plugin-typescript2": "^0.36.0",
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
	author: author,
	license: license,
	devDependencies: devDependencies,
	dependencies: dependencies
};

/**
 * 打印
 * @param type 类型
 * @param msg 信息
 * @param bold 是否加粗
 */
const chalkLog = (type, msg, bold) => {
    let color = "yellow";
    if (type === "success")
        color = "green";
    else if (type === "info")
        color = "blue";
    else if (type === "error")
        color = "red";
    // @ts-ignore
    const handler = bold ? chalk.bold[color](msg) : chalk[color](msg);
    return console.log(handler);
};
class Logger {
    success(msg, bold = false) {
        return chalkLog("success", msg, bold);
    }
    info(msg, bold = false) {
        return chalkLog("info", msg, bold);
    }
    warn(msg, bold = false) {
        return chalkLog("warn", msg, bold);
    }
    error(msg, bold = false) {
        return chalkLog("error", msg, bold);
    }
}

const logger$2 = new Logger();
const templateMap = [
    {
        name: "rollup-library",
        value: "rollup-library",
    },
    {
        name: "rollup-base",
        value: "rollup-base",
    },
];
// 模板列表
const templateList = [
    {
        name: 'rollup-library',
        description: 'Rollup 命令行工具模板',
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
        name: 'rollup-base',
        description: 'Rollup 基础模板',
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
    }
];

// 初始化日志服务
const logger$1 = new Logger();
const welcomeMessage = () => {
    logger$1.info('', true);
    logger$1.info(figlet.textSync("said-cli", {}), true);
    logger$1.info('Welcome to said-cli!');
    logger$1.info('', true);
};
const endMessage = () => {
    logger$1.info('', true);
    logger$1.info(figlet.textSync("zrOvO", {}), true);
    logger$1.info('Thank you for your use!');
};

// 初始化日志服务
const logger = new Logger();
/**
 * 创建项目指令
 * @param params
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
        process.exit(0);
    }
};
/**
 * 选择项目模板
 */
const selectProjectAndDownload = async (projectName) => {
    const answer = await inquirer.prompt([
        {
            type: "list",
            message: "Select a project template.",
            default: "rollup-library",
            name: "template",
            choices: templateMap,
        },
        {
            type: "confirm",
            message: "Do you want to use typescript?",
            name: "isTs",
            default: "false",
        },
    ]);
    // 拼接项目模板
    const templateName = answer.template + (answer.isTs ? "-ts" : "");
    const find = templateList.find((item) => item.name === templateName);
    if (find) {
        // 显示加载条
        const spinner = ora("Downloading template...").start();
        // 拉取git仓库代码
        gitClone(find.url, projectName, { checkout: "main" }, () => {
            // 结束加载条并显示成功消息
            spinner.succeed(chalk.green.bold("The project was created successfully!"));
            // 展示信息
            find.successFn(projectName);
            endMessage();
        });
    }
    else {
        throw new Error("The template not exist!");
    }
};
// 校验参数
const validateParams = (params) => {
    if (!params[0]) {
        throw new Error("Please enter a project name!");
    }
    //  只取第一个参数
    return params[0];
};
// 判断当前目录下是否存在同名文件
const validateProjectName = async (name) => {
    const targetPath = path.join(process.cwd(), name);
    if (fs.existsSync(targetPath)) {
        const answer = await inquirer.prompt([
            {
                message: "The project already exists, do you want to overwrite it?",
                type: "confirm",
                name: "isOver",
                default: "false",
            },
        ]);
        if (answer.isOver) {
            fs.removeSync(targetPath);
        }
        else {
            throw new Error("Cancel the operation!");
        }
    }
};

var execs = {
    create: createExec
};

function main() {
    // 初始化日志
    const logger = new Logger();
    // 初始化命令行参数
    program.name("said-cli").description("A scaffolding tool for quickly pulling project templates.");
    // 设置命令在前，选项在后
    program.version("said-cli" + "@" + myPkg.version).usage("<command> [option]");
    // 初始化命令行参数
    const commands = new Commands();
    const commandResolves = commands.resolve();
    for (let key in commandResolves) {
        const { alias, description } = commandResolves[key];
        program
            .command(key) // 注册命令
            .alias(alias) // 配置命令别名
            .description(description) // 配置命令描述
            .action(function (name, { args }) {
            try {
                // 除了上述的命令，其他统统匹配到这里
                if (key === "*")
                    return logger.error(description);
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
main();
