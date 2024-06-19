import figlet from "figlet";
import Logger from "../utils/Logger";

// 初始化日志服务
const logger = new Logger()

export const welcomeMessage = () => {
  logger.info('')
  logger.info(figlet.textSync("said-cli", {}), true)
  logger.info('Welcome to said-cli!')
  logger.info('')
}

export const endMessage = () => {
  logger.info('')
  logger.info('Thank you for your use said-cli!', true)
}
