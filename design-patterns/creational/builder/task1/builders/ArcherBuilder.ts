import { Archer } from '../warriors/Archer'
import { IWarrior } from '../warriors/IWarrior'
import { WarriorBuilder } from './WarriorBuilder'

export class ArcherBuilder extends WarriorBuilder {
	public createWarrior(): IWarrior {
		this.warrior = new Archer()
		this.warrior.name = 'Archer Soldier'
		return this.warrior
	}
	public equipWeapon(): void {
		this.warrior.weapon = 'Bow'
	}
	public trainWarrior(): void {
		console.log(`${this.warrior.name} is training in ranged combat.`)
	}
}
