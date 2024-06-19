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

export default class Logger {
  success(msg: string, bold: boolean = false) {
    return chalkLog("success", msg, bold)
  }
  info(msg: string, bold: boolean = false) {
    return chalkLog("info", msg, bold)
  }
  warn(msg: string, bold: boolean = false) {
    return chalkLog("warn", msg, bold)
  }
  error(msg: string, bold: boolean = false) {
    return chalkLog("error", msg, bold)
  }
}
