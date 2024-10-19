import { Infantry } from './warriors/Infantry'
import { Archer } from './warriors/Archer'
import { Cavalry } from './warriors/Cavalry'
import { Warrior } from './warriors/Warrior'

export class Garrison {
	public trainWarrior(type: string, name: string): Warrior | null {
		switch (type.toLowerCase()) {
			case 'infantry':
				return new Infantry(name)
			case 'archer':
				return new Archer(name)
			case 'cavalry':
				return new Cavalry(name)
			default:
				console.log('Unknown warrior type!')
				return null
		}
	}
}
