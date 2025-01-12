import { MenuItem } from './IMenuItem'

export class Category implements MenuItem {
	private name: string
	private items: MenuItem[] = []

	constructor(name: string) {
		this.name = name
	}

	getName(): string {
		return this.name
	}

	add(item: MenuItem): void {
		this.items.push(item)
	}

	remove(item: MenuItem): void {
		this.items = this.items.filter(i => i !== item)
	}

	display(depth: number = 0): void {
		console.log(`${'  '.repeat(depth)}+ ${this.name}`)
		this.items.forEach(item => item.display(depth + 1))
	}
}
