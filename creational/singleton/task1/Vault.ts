export class Vault {
	private static instance: Vault | null = null // Static field that holds the only instance of the Vault class
	private keyReturned: boolean = false
	private readonly key: string = '12345ABC' // digital access key
	private constructor() {} // preventing instantiation from outside the class
	public static getInstance(): Vault {
		if (Vault.instance === null) {
			Vault.instance = new Vault()
		}
		return Vault.instance
	}
	public getKey(): string {
		if (!this.keyReturned) {
			this.keyReturned = true
			return this.key
		} else {
			return 'The key has already been retrieved.'
		}
	}
}
