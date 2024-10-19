import { Infantry } from '../warriors/Infantry'
import { IWarrior } from '../warriors/IWarrior'
import { WarriorBuilder } from './WarriorBuilder'

export class InfantryBuilder extends WarriorBuilder {
	public createWarrior(): IWarrior {
		this.warrior = new Infantry()
		this.warrior.name = 'Infantry Soldier'
		return this.warrior
	}

	public equipWeapon(): void {
		this.warrior.weapon = 'Sword'
	}

	public trainWarrior(): void {
		console.log(`${this.warrior.name} is training in close combat.`)
	}
}
