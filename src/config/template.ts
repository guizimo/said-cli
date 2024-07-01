import Logger from '@/utils/Logger';

// 初始化日志服务
const logger = new Logger();

// 模板映射
export const templateMap = [
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
  }
];

// 模板列表
export const templateList = [
  {
    name: 'rollup-library-ts',
    description: 'Rollup+Ts 命令行工具模板',
    url: 'https://github.com/SaidBaseTemplate/rollup-library-ts.git',
    successFn: (projectName: string) => {
      logger.info('Run the following command to start the project:', true);
      logger.info('', true);
      logger.info(`cd ${projectName}`, true);
      logger.info('npm i', true);
      logger.info('npm run dev', true);
    }
  },
  {
    name: 'rollup-base-ts',
    description: 'Rollup+Ts 基础模板',
    url: 'https://github.com/SaidBaseTemplate/rollup-base-ts.git',
    successFn: (projectName: string) => {
      logger.info('Run the following command to start the project:', true);
      logger.info('', true);
      logger.info(`cd ${projectName}`, true);
      logger.info('npm i', true);
      logger.info('npm run dev', true);
    }
  },
  {
    name: 'vue3-ts',
    description: 'Vue3+Ts 基础模板',
    url: 'https://github.com/SaidBaseTemplate/vue3-ts.git',
    successFn: (projectName: string) => {
      logger.info('Run the following command to start the project:', true);
      logger.info('', true);
      logger.info(`cd ${projectName}`, true);
      logger.info('npm i', true);
      logger.info('npm run dev', true);
    }
  },
  {
    name: 'electron-vue3-ts',
    description: 'Electron+Vue3+Ts 基础模板',
    url: 'https://github.com/SaidBaseTemplate/electron-vue3-ts.git',
    successFn: (projectName: string) => {
      logger.info('Run the following command to start the project:', true);
      logger.info('', true);
      logger.info(`cd ${projectName}`, true);
      logger.info('npm i', true);
      logger.info('npm run dev', true);
    }
  }
];
