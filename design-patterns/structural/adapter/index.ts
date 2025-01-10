import { Adult } from './Adult'
import { FakeAdult } from './FakeAdult'

const realAdult = new Adult(20)
console.log(`Real adult can enter: ${realAdult.isAdult()}`)

const krzys = new FakeAdult()
console.log(`Krzyś can enter: ${krzys.isAdult()}`)
