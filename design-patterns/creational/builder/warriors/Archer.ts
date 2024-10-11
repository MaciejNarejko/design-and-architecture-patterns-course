import { IWarrior } from './IWarrior'

export class Archer implements IWarrior {
	name: string
	constructor(name: string) {
		this.name = name
	}
	attack(): string {
		return `${this.name} Archer attacks with a bow!`
	}
}
