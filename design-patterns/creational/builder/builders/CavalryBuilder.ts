import { WarriorBuilder } from './WarriorBuilder'
import { Cavalry } from '../warriors/Cavalry'
import { IWarrior } from '../warriors/IWarrior'

export class CavalryBuilder extends WarriorBuilder {
	public createWarrior(name: string): void {
		this.warrior = new Cavalry(name)
	}
	public equipWeapon(): void {
		console.log('Cavalry receives a lance.')
	}

	public trainFightingSkills(): void {
		console.log('Cavalry trains mounted combat skills.')
	}
}
