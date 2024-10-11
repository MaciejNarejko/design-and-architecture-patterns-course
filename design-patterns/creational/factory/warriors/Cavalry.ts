import { IWarrior } from './IWarrior'

export class Cavalry implements IWarrior {
	attack(): string {
		return 'Cavalry charges with a lance!'
	}
}
