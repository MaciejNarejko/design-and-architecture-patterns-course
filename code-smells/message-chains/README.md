# Message Chains

## Task Description

You have code that invokes a chain of method calls, such as `Library.GetBook().GetAuthor().GetName()`. Your task is to introduce a new method `GetAuthorName` in the `Library` class to reduce the message chain.


### Code to Refactor

```csharp
public class Car
{
    public Engine GetEngine()
    {
        return new Engine();
    }
}

public class Engine
{
    public Cylinder GetCylinder()
    {
        return new Cylinder();
    }
}

public class Cylinder
{
    public string GetSize()
    {
        return "2.0L";
    }
}

// Example invocation
Car car = new Car();
string cylinderSize = car.GetEngine().GetCylinder().GetSize();
```
### Steps to Complete
1. Introduce a method GetCylinderSize in the Car class.
2. Move the nested method chain into the new method within the Car class.
3. Update the method calls to use the new method.