export class Vault {
	private static instance: Vault
	private key: string | null

	private constructor() {
		this.key = '12345-SECRET-ACCESS-KEY'
	}

	public static getInstance(): Vault {
		if (!Vault.instance) {
			Vault.instance = new Vault()
		}
		return Vault.instance
	}
	public getKey(): string {
		if (this.key) {
			const accessKey = this.key
			this.key = null
			return accessKey
		} else return 'The key has already been returned.'
	}
}
