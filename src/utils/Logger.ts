import chalk from "chalk";

/**
 * 打印
 * @param type 类型
 * @param msg 信息
 * @param bold 是否加粗
 */
const chalkLog = (type: string, msg: string, bold: boolean) => {
  let color = "yellow"
  if (type === "success") color = "green"
  else if (type === "info") color = "blue"
  else if (type === "error") color = "red"
  // @ts-ignore
  const handler = bold ? chalk.bold[color](msg) : chalk[color](msg)
  return console.log(handler)
}

/**
 * 日志类
 */
export default class Logger {
  // 成功
  success(msg: string, bold: boolean = false) {
    return chalkLog("success", msg, bold)
  }
  // 输出
  info(msg: string, bold: boolean = false) {
    return chalkLog("info", msg, bold)
  }
  // 警告
  warn(msg: string, bold: boolean = false) {
    return chalkLog("warn", msg, bold)
  }
  // 错误
  error(msg: string, bold: boolean = false) {
    return chalkLog("error", msg, bold)
  }
}
