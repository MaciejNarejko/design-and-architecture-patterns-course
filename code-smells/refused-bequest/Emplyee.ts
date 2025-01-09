import { IEmployee } from './IEmployee'

export class Employee implements IEmployee {
	public name: string
	public position: string

	constructor(name: string, position: string) {
		this.name = name
		this.position = position
	}

	public work(): void {
		console.log(`${this.name} is working.`)
	}

	public attendMeeting(): void {
		console.log(`${this.name} is attending a meeting.`)
	}
}
