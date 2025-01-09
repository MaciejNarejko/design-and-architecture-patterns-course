import { Employee } from './Emplyee'

export class Manager extends Employee {
	constructor(name: string, position: string) {
		super(name, position)
	}

	manageTeam(): void {
		// Implementation
		console.log(`${this.name} (Manager) is managing the team.`)
	}
}
