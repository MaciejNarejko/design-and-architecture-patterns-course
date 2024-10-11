import { Garrison } from './Garrison'
import { Warrior } from './warriors/Warrior'

const garrison = new Garrison()

const warriors: Warrior[] = [
	garrison.trainWarrior('infantry', 'Infantry 1'),
	garrison.trainWarrior('infantry', 'Infantry 2'),
	garrison.trainWarrior('infantry', 'Infantry 3'),
	garrison.trainWarrior('archer', 'Archer 1'),
	garrison.trainWarrior('archer', 'Archer 2'),
	garrison.trainWarrior('archer', 'Archer 3'),
	garrison.trainWarrior('archer', 'Archer 4'),
	garrison.trainWarrior('cavalry', 'Cavalry 1'),
	garrison.trainWarrior('cavalry', 'Cavalry 2'),
	garrison.trainWarrior('cavalry', 'Cavalry 3'),
].filter((warrior): warrior is Warrior => warrior !== null)

warriors.forEach(warrior => {
	warrior.fight()
})
