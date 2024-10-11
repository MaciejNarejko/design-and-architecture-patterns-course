import { Garrison } from './garrison/Garrison'
import { ArcherBuilder } from './builders/ArcherBuilder'
import { CavalryBuilder } from './builders/CavalryBuilder'
import { InfantryBuilder } from './builders/InfantryBuilder'
import { IWarrior } from './warriors/IWarrior'

const warriors: IWarrior[] = []

const archerBuilder = new ArcherBuilder()
const cavalryBuilder = new CavalryBuilder()
const infantryBuilder = new InfantryBuilder()

const archerGarrison = new Garrison(archerBuilder)
const cavalryGarrison = new Garrison(cavalryBuilder)
const infantryGarrison = new Garrison(infantryBuilder)

// Train 2 Infantry warriors
warriors.push(infantryGarrison.trainWarrior('John'))
warriors.push(infantryGarrison.trainWarrior('Robert'))

// Train 2 Cavalry warriors
warriors.push(cavalryGarrison.trainWarrior('Arthur'))
warriors.push(cavalryGarrison.trainWarrior('Lancelot'))

// Train 2 Archer warriors
warriors.push(archerGarrison.trainWarrior('Robin'))
warriors.push(archerGarrison.trainWarrior('Oliver'))

// Display all warriors and their attacks
console.log('\n--- Trained Warriors ---')
warriors.forEach((warrior, index) => {
	console.log(`Warrior ${index + 1}: ${warrior.attack()}`)
})
