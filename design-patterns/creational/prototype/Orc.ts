export class Orc {
	
    constructor(public name: string, public strength: number) {}

	clone(): Orc {
		const serialized = JSON.stringify(this)
		return JSON.parse(serialized)
	}
}
