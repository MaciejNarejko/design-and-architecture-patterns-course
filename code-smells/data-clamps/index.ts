/* class EventManager {
    registerEvent(eventName: string, eventDate: Date, location: string): void {
        console.log(`Event: ${eventName}, Date: ${eventDate}, Location: ${location}`);
    }
}
 */
// Refactored

class EventDetails {
	constructor(public eventName: string, public eventDate: Date, public location: string) {}
}

class EventManager {
	registerEvent(eventDetails: EventDetails): void {
		console.log(`Event: ${eventDetails.eventName}, Date: ${eventDetails.eventDate}, Location: ${eventDetails.location}`)
	}
}

const eventDetails = new EventDetails('Conference', new Date('2025-01-15'), 'Warsaw')
const eventManager = new EventManager()
eventManager.registerEvent(eventDetails)
