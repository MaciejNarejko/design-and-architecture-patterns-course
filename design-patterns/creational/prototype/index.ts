import { Orc } from './Orc'

function getRandomStrength(): number {
	return Math.floor(Math.random() * 100) + 1
}

// Create the original Orc
const originalOrc = new Orc('Gorash', 50)

// Create a collection to hold clones
const orcClones: Orc[] = []

// Clone the original Orc
for (let i = 0; i < 5; i++) {
	const clonedOrc = originalOrc.clone()
	clonedOrc.strength = getRandomStrength()
	orcClones.push(clonedOrc)
}

// Display all Orc clones
orcClones.forEach((orc, index) => {
	console.log(`Clone ${index + 1}: Name=${orc.name}, Strength=${orc.strength}`)
})
