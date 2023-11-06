import chalk from 'chalk'

export class NextLogger {
  private context: string
  private startTime: [number, number]

  constructor(context: string) {
    this.context = context
    this.startTime = process.hrtime()
  }

  private formatDuration() {
    const diff = process.hrtime(this.startTime)
    const ms = diff[0] * 1000 + diff[1] / 1e6 // 초를 밀리초로 변환
    return chalk.yellow(`+${ms.toFixed(0)}ms`)
  }

  private formatMessage(level: string, message: string): string {
    const timestamp = chalk.bold.white(new Date().toISOString())
    const pid = process.pid
    const context = chalk.yellow(`[${this.context}]`)
    const duration = this.formatDuration()
    return `[Next] ${pid} - ${timestamp} ${level} ${context} ${message} ${duration}`
  }

  info(message: string) {
    console.log(chalk.green(this.formatMessage('INFO', message)))
  }

  error(message: string) {
    console.error(chalk.red(this.formatMessage('ERROR', message)))
  }

  warn(message: string) {
    console.warn(chalk.yellow(this.formatMessage('WARN', message)))
  }

  debug(message: string) {
    console.debug(chalk.blue(this.formatMessage('DEBUG', message)))
  }
}
