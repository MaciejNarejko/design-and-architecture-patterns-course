interface Accessible {
	access(): void
}

class UnrestrictedObject implements Accessible {
	access(): void {
		console.log('Accessing unrestricted object.')
	}
}

class RestrictedObject implements Accessible {
	private password: string

	constructor(password: string) {
		this.password = password
	}

	access(): void {
		console.log('Accessing restricted object.')
	}

	verifyPassword(input: string): boolean {
		return this.password === input
	}
}

class AccessProxy implements Accessible {
	private restrictedObject: RestrictedObject
	private unrestrictedObject: UnrestrictedObject

	constructor(restricted: RestrictedObject, unrestricted: UnrestrictedObject) {
		this.restrictedObject = restricted
		this.unrestrictedObject = unrestricted
	}

	access(password?: string): void {
		if (password) {
			if (this.restrictedObject.verifyPassword(password)) {
				this.restrictedObject.access()
			} else {
				console.log('Access denied: Incorrect password.')
			}
		} else {
			this.unrestrictedObject.access()
		}
	}
}

const unrestrictedObject = new UnrestrictedObject()
const restrictedObject = new RestrictedObject('securepassword')
const proxy = new AccessProxy(restrictedObject, unrestrictedObject)

proxy.access()
proxy.access('securepassword')
proxy.access('wrongpassword')
