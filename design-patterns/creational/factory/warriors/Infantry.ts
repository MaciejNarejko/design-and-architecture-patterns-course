import { IWarrior } from './IWarrior'

export class Infantry implements IWarrior {
	attack(): string {
		return 'Infantry attacks with a sword!'
	}
}
