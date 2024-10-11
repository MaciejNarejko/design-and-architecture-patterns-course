import { Vault } from './Vault'

const vault = Vault.getInstance()
// First attempt
console.log(vault.getKey()) // Expected result: "12345ABC"

// Second attempt
console.log(vault.getKey()) //  Expected result: "The key has already been retrieved."
