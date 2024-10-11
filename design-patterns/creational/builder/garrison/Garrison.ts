import { WarriorBuilder } from '../builders/WarriorBuilder'
import { IWarrior } from '../warriors/IWarrior'

export class Garrison {
	public builder: WarriorBuilder

	constructor(builder: WarriorBuilder) {
		this.builder = builder
	}

	public trainWarrior(name: string): IWarrior {
		this.builder.createWarrior(name)
		this.builder.equipWeapon()
		this.builder.trainFightingSkills()
		return this.builder.getWarrior()
	}
}
