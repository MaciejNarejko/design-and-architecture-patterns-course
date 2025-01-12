import { MenuItem } from './IMenuItem'

export class Dish implements MenuItem {
	private name: string

	constructor(name: string) {
		this.name = name
	}

	getName(): string {
		return this.name
	}

	display(depth: number = 0): void {
		console.log(`${'  '.repeat(depth)}- ${this.name}`)
	}
}
