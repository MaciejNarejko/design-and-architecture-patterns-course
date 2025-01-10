import { Adult } from './Adult'

export class FakeAdult extends Adult {
	constructor() {
		super(17)
	}

	public isAdult(): boolean {
		return true
	}
}
