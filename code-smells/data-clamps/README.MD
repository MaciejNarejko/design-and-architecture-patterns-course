# Data Clumps

## Task Description

### Task

You have a method, `RegisterEvent`, that takes several related parameters: `eventName`, `eventDate`, and `location`. Your task is to refactor this method to eliminate the data clump by encapsulating these parameters into a new class called `EventDetails`.

```csharp
public void RegisterEvent(string eventName, DateTime eventDate, string location)
{
    Console.WriteLine($"Event: {eventName}, Date: {eventDate}, Location: {location}");
}
```

### Steps to complete:

1. Create a new class EventDetails that includes the fields eventName, eventDate, and location.
2. Replace the list of parameters in the RegisterEvent method with a single EventDetails object.
3. Update the method logic to use the new object.





