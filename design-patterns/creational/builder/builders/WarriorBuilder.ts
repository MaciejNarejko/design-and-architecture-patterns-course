import { IWarrior } from '../warriors/IWarrior'

export abstract class WarriorBuilder {
	protected warrior!: IWarrior

	public abstract createWarrior(name: string): void
	public abstract equipWeapon(): void
	public abstract trainFightingSkills(): void

	public getWarrior(): IWarrior {
		return this.warrior
	}
}
