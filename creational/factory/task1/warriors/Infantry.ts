import { Warrior } from './Warrior'

export class Infantry extends Warrior {
	fight() {
		console.log(`${this.name} (Infantry) fights with a sword.`)
	}
}
