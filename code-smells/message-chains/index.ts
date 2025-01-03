class Car {
	public getEngine(): Engine {
		return new Engine()
	}

	public getCylinderSize(): string {
		return this.getEngine().getCylinder().getSize()
	}
}

class Engine {
	public getCylinder(): Cylinder {
		return new Cylinder()
	}
}

class Cylinder {
	public getSize(): string {
		return '2.0L'
	}
}

const car = new Car()
const cylinderSize = car.getCylinderSize()
console.log(`Cylinder Size: ${cylinderSize}`)
