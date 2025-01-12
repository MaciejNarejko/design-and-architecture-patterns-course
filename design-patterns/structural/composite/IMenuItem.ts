export interface MenuItem {
	getName(): string
	display(depth?: number): void
}
