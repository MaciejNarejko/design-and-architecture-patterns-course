import { Garrison } from './Garrison'
import { InfantryBuilder } from './builders/InfantryBuilder'
import { ArcherBuilder } from './builders/ArcherBuilder'
import { CavalryBuilder } from './builders/CavalryBuilder'
import { IWarrior } from './warriors/IWarrior'

const builders = [
	{ builder: new InfantryBuilder(), quantity: 2 },
	{ builder: new ArcherBuilder(), quantity: 2 },
	{ builder: new CavalryBuilder(), quantity: 2 },
]
const warriors: IWarrior[] = []

builders.forEach(({ builder, quantity }) => {
	const garrison = new Garrison(builder)
	for (let i = 0; i < quantity; i++) {
		warriors.push(garrison.buildAndTrainWarrior())
	}
})

warriors.forEach(warrior => {
	console.log(`${warrior.name} is ready to fight with ${warrior.weapon}.`)
})
