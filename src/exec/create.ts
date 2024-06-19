import inquirer from "inquirer";
import Logger from "@/utils/Logger";
import fs from "fs-extra";
import * as path from "path";
import {templateList, templateMap} from "@/config/template";
import ora from "ora";
import chalk from "chalk";
import gitClone from "git-clone";
import {endMessage, welcomeMessage} from "@/config/message";

// 初始化日志服务
const logger = new Logger()

/**
 * 创建项目指令
 * @param params
 */
export const createExec = async (params: string[]) => {
  try {
    welcomeMessage()
    const projectName = validateParams(params)
    await validateProjectName(projectName)
    await selectProjectAndDownload(projectName)
  } catch (e) {
    logger.error(e.message)
    process.exit(0)
  }
}

/**
 * 选择项目模板
 */
const selectProjectAndDownload = async (projectName: string) => {
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
  const find = templateList.find((item) => item.name === templateName)
  if (find) {
    // 显示加载条
    const spinner = ora("Downloading template...").start();
    // 拉取git仓库代码
    gitClone(find.url, projectName, { checkout: "main" }, () => {
      // 结束加载条并显示成功消息
      spinner.succeed(chalk.green.bold("The project was created successfully!"));
      // 展示信息
      find.successFn(projectName)
      endMessage()
    });
  } else {
    throw new Error("The template not exist!");
  }
}

// 校验参数
const validateParams = (params: string[]) => {
  if (!params[0]) {
    throw new Error("Please enter a project name!");
  }
  //  只取第一个参数
  return params[0];
}

// 判断当前目录下是否存在同名文件
const validateProjectName = async (name: string) => {
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
    } else {
      throw new Error("Cancel the operation!");
    }
  }
}
