export class Logger {
	logError(message: string, timestamp: Date): void {
		const formattedMessage = this.formatLogMessage('ERROR', message, timestamp)
		console.log(formattedMessage)
	}

	logWarning(message: string, timestamp: Date): void {
		const formattedMessage = this.formatLogMessage('WARNING', message, timestamp)
		console.log(formattedMessage)
	}

	private formatLogMessage(logLevel: string, message: string, timestamp: Date): string {
		const formattedTimestamp = timestamp.toISOString()
		return `${logLevel}: [${formattedTimestamp}] ${message}`
	}
}
