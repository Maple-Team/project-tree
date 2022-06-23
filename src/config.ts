import { WorkspaceConfiguration, workspace } from 'vscode'

let config!: Config
export default class Config {
  withComment = false
  commentDistance = 5
  theme = 'perfect'
  loadIgnore = true
  constructor() {
    if (config) {
      return config
    }
    this.ensureConfig()
    return (config = this)
  }
  ensureConfig() {
    const configuration: WorkspaceConfiguration = workspace.getConfiguration()
    this.withComment = !!configuration.get('ProjectTree.withComment')
    this.commentDistance = configuration.get('ProjectTree.commentDistance') || 1
    this.theme = configuration.get('ProjectTree.theme') || this.theme
    this.loadIgnore = !!configuration.get('ProjectTree.loadIgnore')
  }
}
