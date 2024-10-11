import { IWarrior } from './IWarrior'

export class Cavalry implements IWarrior {
	name: string
	constructor(name: string) {
		this.name = name
	}
	attack(): string {
		return `${this.name} Cavalry charges with a lance!`
	}
}
