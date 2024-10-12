import { Cavalry } from '../warriors/Cavalry'
import { IWarrior } from '../warriors/IWarrior'
import { WarriorBuilder } from './WarriorBuilder'

export class CavalryBuilder extends WarriorBuilder {
	public createWarrior(): IWarrior {
		this.warrior = new Cavalry()
		this.warrior.name = 'Cavalry Soldier'
		return this.warrior
	}
	public equipWeapon(): void {
		this.warrior.weapon = 'Lance'
	}
	public trainWarrior(): void {
		console.log(`${this.warrior.name} is training in mounted combat.`)
	}
}
