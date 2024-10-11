import { IWarrior } from './IWarrior'

export class Infantry implements IWarrior {
	name: string
	constructor(name: string) {
		this.name = name
	}
	attack(): string {
		return `${this.name} Infantry attacks with a sword!`
	}
}
