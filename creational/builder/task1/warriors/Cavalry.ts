import { IWarrior } from './IWarrior'

export class Cavalry implements IWarrior {
	public name: string = ''
	public weapon: string = ''

	public fight() {
		console.log(`${this.name} (Cavalry) fights with ${this.weapon}.`)
	}
}
