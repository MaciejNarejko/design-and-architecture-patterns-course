import { IWarrior } from '../warriors/IWarrior'

export abstract class WarriorBuilder {
	protected warrior!: IWarrior

	public abstract createWarrior(): IWarrior
	public abstract equipWeapon(): void
	public abstract trainWarrior(): void

	public getWarrior(): IWarrior {
		return this.warrior
	}
}
