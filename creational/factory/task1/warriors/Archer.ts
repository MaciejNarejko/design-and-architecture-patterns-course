import { Warrior } from './Warrior'

export class Archer extends Warrior {
	fight() {
		console.log(`${this.name} (Archer) fights with a bow.`)
	}
}
