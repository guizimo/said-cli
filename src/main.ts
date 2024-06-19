#!/usr/bin/env node
import { program } from "commander";
import Commands from "@/common/Commands";
import myPkg from "../package.json";
import Logger from "@/utils/Logger";
import execs from "@/exec/index";
import { LIBRARY_NAME } from "@/config/config";

function main() {
  // 初始化日志
  const logger = new Logger()
  // 初始化命令行参数
  program.name(LIBRARY_NAME).description("A scaffolding tool for quickly pulling project templates.")
  // 配置版本信息
  program.version(LIBRARY_NAME + "@" + myPkg.version).usage("<command> [option]")
  // 初始化命令行参数
  const commands = new Commands()
  // 获取命令列表
  const commandResolves: any = commands.resolve()
  for (let key in commandResolves) {
    const { alias, description } = commandResolves[key]
    program
      .command(key) // 注册命令
      .alias(alias) // 配置命令别名
      .description(description) // 配置命令描述
      .action(function (name, {args}) {
        try {
          // 未注册的命令
          if (key === "*") return logger.error(description)
          // 执行命令
          // @ts-ignore
          return execs[key](args)
        } catch (e) {
          logger.error('Unrecognized commands "' + key + '".')
        }
      })
  }
  // 解析命令行参数
  // @ts-ignore
  program.parse(program.argv);
}

// 执行主函数
main()
