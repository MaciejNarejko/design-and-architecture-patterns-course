import { Vault } from './Vault'

const vault = Vault.getInstance()

// First attempt
console.log('vault 1 key:', vault.getKey()) // Expected result: "12345-SECRET-ACCESS-KEY"

// Second attempt
console.log('vault 2 key:', vault.getKey()) // Expected result: "The key has already been returned."
