import { WarriorBuilder } from './builders/WarriorBuilder'
import { IWarrior } from './warriors/IWarrior'

export class Garrison {
	public builder: WarriorBuilder

	constructor(builder: WarriorBuilder) {
		this.builder = builder
	}

	public buildAndTrainWarrior(): IWarrior {
		this.builder.createWarrior()
		this.builder.equipWeapon()
		this.builder.trainWarrior()
		return this.builder.getWarrior()
	}
}
