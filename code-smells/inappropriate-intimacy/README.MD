# Inappropriate Intimacy

## Task Description

### Task 1

You have the Student and Course classes, where Student knows too many implementation details of the Course class, such as directly modifying its private fields. Your task is to eliminate this "tight coupling" and improve the code structure.

Code to Refactor:

```csharp
public class Course
{
    private int _credits;
    private bool _isCompleted;

    public int Credits
    {
        get { return _credits; }
        set { _credits = value; }
    }

    public bool IsCompleted
    {
        get { return _isCompleted; }
        set { _isCompleted = value; }
    }
}

public class Student
{
    public void CompleteCourse(Course course)
    {
        course.Credits = 3; // Directly setting private fields
        course.IsCompleted = true; // Directly setting private fields
    }
}
```

#### Steps to to Refactor:

1. Remove Direct Access: Eliminate the direct access to private fields of the Course class in the methods of the Student class.
2. Add Public Methods: Introduce public methods in the Course class to modify its state (e.g., Complete).
3. Use Public Methods: Replace direct field settings with public method calls.
