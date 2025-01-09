# Refused Bequest 
## Task Description

You have a class `Manager` inheriting from `Employee`, but `Manager` does not use all the methods inherited from `Employee`. Your task is to remove unnecessary inheritance and introduce a more appropriate solution.

### Code to Refactor

```csharp
public class Employee
{
    public string Name { get; set; }
    public string Position { get; set; }
    public void Work() { /* Implementation */ }
    public void AttendMeeting() { /* Implementation */ }
}

public class Manager : Employee
{
    public void ManageTeam() { /* Implementation */ }
}
```

### Steps to Complete

1. Remove inheritance in the `Manager` class.
2. Create an interface `IEmployee` containing the methods `Work` and `AttendMeeting`.
3. Introduce the `IEmployee` interface to the `Manager` class and move only the methods that are used into it.
