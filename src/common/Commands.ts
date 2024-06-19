export default class Commands {
  main: string

  constructor() {
    this.main = "said-cli"
  }

  /**
   * 对外暴露，获取命令集
   */
  resolve() {
    return {
      create: {
        alias: "",
        description: "Quickly create a project.",
        examples: [this.main + "create <project-name>"]
      },
    }
  }
}
