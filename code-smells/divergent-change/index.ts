import { AuthenticationService } from './AuthenticationService'
import { UserAccount } from './UserAccount'
import { UserReportGenerator } from './UserReportGenerator'

const user = new UserAccount('JohnDoe', 'securePassword')
const authService = new AuthenticationService()
const reportGenerator = new UserReportGenerator()

authService.login(user, 'JohnDoe', 'securePassword')
reportGenerator.generateReport(user)
authService.logout(user)
