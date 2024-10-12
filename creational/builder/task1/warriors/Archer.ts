import { IWarrior } from './IWarrior'

export class Archer implements IWarrior {
	public name: string = ''
	public weapon: string = ''

	public fight() {
		console.log(`${this.name} (Archer) fights with ${this.weapon}.`)
	}
}
