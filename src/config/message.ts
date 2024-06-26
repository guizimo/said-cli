import figlet from 'figlet';
import Logger from '@/utils/Logger';
import { ISSUE_ADDRESS, LIBRARY_NAME } from '@/config/config';

// 初始化日志服务
const logger = new Logger();

// 欢迎信息
export const welcomeMessage = () => {
  logger.info('');
  logger.info(figlet.textSync(LIBRARY_NAME, {}), true);
  logger.info(`Welcome to ${LIBRARY_NAME}!`);
  logger.info('');
};

// 结束信息
export const endMessage = () => {
  logger.info('');
  logger.info(`Thank you for your use ${LIBRARY_NAME}!`, true);
};

// 错误信息
export const errorMessage = () => {
  logger.info('');
  logger.info(`If the above does not solve your problem, please check here: ${ISSUE_ADDRESS}!`, true);
};
