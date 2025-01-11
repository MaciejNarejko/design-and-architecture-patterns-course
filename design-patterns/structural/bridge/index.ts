abstract class Interface {
	protected system: System

	constructor(system: System) {
		this.system = system
	}

	abstract displayMenu(): void
}

class GraphicInterface extends Interface {
	displayMenu(): void {
		console.log('Menu displayed by Graphic Interface:')
		console.log(this.system.getInstalledPrograms())
	}
}

class TextInterface extends Interface {
	displayMenu(): void {
		console.log('Menu displayed by Text Interface:')
		console.log(this.system.getInstalledPrograms())
	}
}

abstract class System {
	abstract getInstalledPrograms(): string[]
}

class WindowsSystem extends System {
	getInstalledPrograms(): string[] {
		return ['Notepad', 'Calculator', 'Edge']
	}
}

class LinuxSystem extends System {
	getInstalledPrograms(): string[] {
		return ['Vim', 'GIMP', 'Firefox']
	}
}

const windowsSystem = new WindowsSystem()
const linuxSystem = new LinuxSystem()

const graphicWindowsInterface = new GraphicInterface(windowsSystem)
const graphicLinuxInterface = new GraphicInterface(linuxSystem)

const textWindowsInterface = new TextInterface(windowsSystem)
const textLinuxInterface = new TextInterface(linuxSystem)

console.log('=== Graphic Interfaces ===')

console.log('=== Graphic Interfaces ===')
graphicWindowsInterface.displayMenu()
graphicLinuxInterface.displayMenu()

console.log('\n=== Text Interfaces ===')
textWindowsInterface.displayMenu()
textLinuxInterface.displayMenu()
