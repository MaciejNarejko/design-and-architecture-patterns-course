import { Warrior } from './Warrior'

export class Cavalry extends Warrior {
	fight() {
		console.log(`${this.name} (Cavalry) fights on horseback with a lance.`)
	}
}
