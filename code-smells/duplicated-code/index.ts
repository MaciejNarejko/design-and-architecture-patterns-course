import { Logger } from './Logger'

const logger = new Logger()

logger.logError("An unexpected error occurred", new Date());
logger.logWarning("Disk space is running low", new Date());