import { WarriorBuilder } from './WarriorBuilder'
import { Archer } from '../warriors/Archer'
import { IWarrior } from '../warriors/IWarrior'

export class ArcherBuilder extends WarriorBuilder {
    public createWarrior(name: string): void {
        this.warrior = new Archer(name)
    }
    public equipWeapon(): void {
        console.log('Archer receives a bow.')
    }

    public trainFightingSkills(): void {
        console.log('Archer trains distance fighting skills.')
    }
}
