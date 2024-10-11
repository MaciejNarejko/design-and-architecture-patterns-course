import { Garrison } from './Garrison'
import { IWarrior } from './warriors/IWarrior'

const garrison = new Garrison()

const warriors: IWarrior[] = [
	garrison.trainWarrior('infantry'),
	garrison.trainWarrior('infantry'),
	garrison.trainWarrior('infantry'),
	garrison.trainWarrior('cavalry'),
	garrison.trainWarrior('cavalry'),
	garrison.trainWarrior('cavalry'),
	garrison.trainWarrior('archer'),
	garrison.trainWarrior('archer'),
	garrison.trainWarrior('archer'),
	garrison.trainWarrior('archer'),
]

warriors.forEach((warrior, index) => {
	console.log(`Warrior ${index + 1}: ${warrior.attack()}`)
})
