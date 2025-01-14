class School {
	public getClassroom(): Classroom {
		return new Classroom()
	}

	public getTeacherName(): string {
		return this.getClassroom().getTeacher().getName()
	}
}

class Classroom {
	public getTeacher(): Teacher {
		return new Teacher()
	}
}

class Teacher {
	public getName(): string {
		return 'John Smith'
	}
}

// Updated Example Usage
const school = new School()
const teacherName = school.getTeacherName()
console.log(teacherName)
