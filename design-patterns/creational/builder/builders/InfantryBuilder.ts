import { WarriorBuilder } from './WarriorBuilder'
import { Infantry } from '../warriors/Infantry'
import { IWarrior } from '../warriors/IWarrior'

export class InfantryBuilder extends WarriorBuilder {
	public createWarrior(name: string): void {
		this.warrior = new Infantry(name)
	}
	public equipWeapon(): void {
		console.log('Infantry receives a sword.')
	}

	public trainFightingSkills(): void {
		console.log('Infantry trains close combat skills.')
	}
}
