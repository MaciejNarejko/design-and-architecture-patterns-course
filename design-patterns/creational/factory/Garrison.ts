import { IWarrior } from './warriors/IWarrior'
import { Infantry } from './warriors/Infantry'
import { Archer } from './warriors/Archer'
import { Cavalry } from './warriors/Cavalry'

export class Garrison {
	trainWarrior(profession: string): IWarrior {
		switch (profession.toLowerCase()) {
			case 'infantry':
				return new Infantry()
			case 'archer':
				return new Archer()
			case 'cavalry':
				return new Cavalry()
			default:
				throw new Error(`Unknown profession: ${profession}`)
		}
	}
}
