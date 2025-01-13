class Course {
	private credits: number = 0
	private isCompleted: boolean = false

	public complete(credits: number): void {
		this.credits = credits
		this.isCompleted = true
	}

	public getCredits(): number {
		return this.credits
	}

	public getIsCompleted(): boolean {
		return this.isCompleted
	}
}

class Student {
	public completeCourse(course: Course): void {
		course.complete(3)
	}
}

// Testing
const course = new Course()
const student = new Student()

student.completeCourse(course)

console.log(`Course Credits: ${course.getCredits()}`) // Output: Course Credits: 3
console.log(`Course Completed: ${course.getIsCompleted()}`)
