#!/usr/bin/env node
import { program } from "commander";
import Commands from "@/common/Commands";
import myPkg from "../package.json";
import Logger from "@/utils/Logger";
import execs from "@/exec/index";

function main() {
  // 初始化日志
  const logger = new Logger()

  // 初始化命令行参数
  program.name("said-cli").description("A scaffolding tool for quickly pulling project templates.")

  // 设置命令在前，选项在后
  program.version("said-cli" + "@" + myPkg.version).usage("<command> [option]")

  // 初始化命令行参数
  const commands = new Commands()
  const commandResolves: any = commands.resolve()
  for (let key in commandResolves) {
    const { alias, description } = commandResolves[key]
    program
      .command(key) // 注册命令
      .alias(alias) // 配置命令别名
      .description(description) // 配置命令描述
      .action(function (name, { args }) {
        try {
          // 除了上述的命令，其他统统匹配到这里
          if (key === "*") return logger.error(description)
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

main()
