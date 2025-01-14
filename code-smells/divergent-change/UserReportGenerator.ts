import { UserAccount } from './UserAccount'

export class UserReportGenerator {
	generateReport(user: UserAccount): void {
		console.log(`Generating report for user: ${user.username}`)
	}
}
