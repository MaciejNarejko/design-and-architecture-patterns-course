import { IWarrior } from './IWarrior'

export class Infantry implements IWarrior {
	public name: string = ''
	public weapon: string = ''

	public fight() {
		console.log(`${this.name} (Infantry) fights with ${this.weapon}.`)
	}
}
