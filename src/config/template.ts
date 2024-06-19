import Logger from "@/utils/Logger";

const logger = new Logger()

export const templateMap = [
  {
    name: "rollup-library",
    value: "rollup-library",
  },
  {
    name: "rollup-base",
    value: "rollup-base",
  },
]

// 模板列表
export const templateList = [
  {
    name: 'rollup-library',
    description: 'Rollup 命令行工具模板',
    url: 'https://github.com/SaidBaseTemplate/rollup-library-ts.git',
    successFn: (projectName: string) => {
      logger.info('')
      logger.info('Run the following command to start the project:', true)
      logger.info(`cd ${projectName}`)
      logger.info('npm i')
      logger.info('npm run dev')
    }
  },
  {
    name: 'rollup-library-ts',
    description: 'Rollup+Ts 命令行工具模板',
    url: 'https://github.com/SaidBaseTemplate/rollup-library-ts.git',
    successFn: (projectName: string) => {
      logger.info('Run the following command to start the project:', true)
      logger.info('', true)
      logger.info(`cd ${projectName}`, true)
      logger.info('npm i', true)
      logger.info('npm run dev', true)
    }
  },
  {
    name: 'rollup-base',
    description: 'Rollup 基础模板',
    url: 'https://github.com/SaidBaseTemplate/rollup-base-ts.git',
    successFn: (projectName: string) => {
      logger.info('Run the following command to start the project:', true)
      logger.info('', true)
      logger.info(`cd ${projectName}`, true)
      logger.info('npm i', true)
      logger.info('npm run dev', true)
    }
  },
  {
    name: 'rollup-base-ts',
    description: 'Rollup+Ts 基础模板',
    url: 'https://github.com/SaidBaseTemplate/rollup-base-ts.git',
    successFn: (projectName: string) => {
      logger.info('Run the following command to start the project:', true)
      logger.info('', true)
      logger.info(`cd ${projectName}`, true)
      logger.info('npm i', true)
      logger.info('npm run dev', true)
    }
  }
]
