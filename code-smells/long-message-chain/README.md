# Long Message Chain

## Task Description

### Task 1

You have code that invokes a long chain of methods: School.GetClassroom().GetTeacher().GetName(). Your task is to introduce a new method GetTeacherName in the School class to reduce the length of the message chain.

Code to Refactor:

```csharp
public class School
{
    public Classroom GetClassroom()
    {
        return new Classroom();
    }
}

public class Classroom
{
    public Teacher GetTeacher()
    {
        return new Teacher();
    }
}

public class Teacher
{
    public string GetName()
    {
        return "John Smith";
    }
}

// Example usage
School school = new School();
string teacherName = school.GetClassroom().GetTeacher().GetName();

```

#### Steps to to Refactor:

1. Add a delegating method GetTeacherName in the School class.
2. Move the nested method calls into the new method in the School class.
3. Update the original code to use the new method.
