export class Adult {
	private age: number

	constructor(age: number) {
		this.age = age
	}

	public isAdult(): boolean {
		return this.age >= 18
	}
}
