import { Employee } from './Emplyee'
import { Manager } from './Manager'

const employee = new Employee('John Johnson', 'Software Developer')
employee.work()
employee.attendMeeting()

const manager = new Manager('Adam Kovalsky', 'Manager')
manager.work()
manager.attendMeeting()
manager.manageTeam()
