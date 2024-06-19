import figlet from "figlet";
import Logger from "@/utils/Logger";
import { LIBRARY_NAME } from "@/config/config";

// 初始化日志服务
const logger = new Logger()

// 欢迎信息
export const welcomeMessage = () => {
  logger.info('')
  logger.info(figlet.textSync(LIBRARY_NAME, {}), true)
  logger.info(`Welcome to ${LIBRARY_NAME}!`)
  logger.info('')
}

// 结束信息
export const endMessage = () => {
  logger.info('')
  logger.info(`Thank you for your use ${LIBRARY_NAME}!`, true)
}
