import { IWarrior } from './IWarrior'

export class Archer implements IWarrior {
	attack(): string {
		return 'Archer attacks with a bow!'
	}
}
