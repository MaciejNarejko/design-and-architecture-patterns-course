# Duplicated Code

## Task Description

### Task 1

You have two methods, `LogError` and `LogWarning`, which contain duplicated logic for formatting log messages. Your task is to eliminate the duplicated code by extracting the shared logic into a new method called `FormatLogMessage`.

```csharp
public void LogError(string message, DateTime timestamp)
{
    string formattedTimestamp = timestamp.ToString("yyyy-MM-dd HH:mm:ss");
    string formattedMessage = $"ERROR: [{formattedTimestamp}] {message}";
    Console.WriteLine(formattedMessage);
}

public void LogWarning(string message, DateTime timestamp)
{
    string formattedTimestamp = timestamp.ToString("yyyy-MM-dd HH:mm:ss");
    string formattedMessage = $"WARNING: [{formattedTimestamp}] {message}";
    Console.WriteLine(formattedMessage);
}
```

#### Steps to complete:

1. Extract the duplicated logic for formatting log messages into a separate method named FormatLogMessage.
2. Replace the duplicated code in the LogError and LogWarning methods with a call to the new FormatLogMessage method.
3. Refactor the methods to improve their readability and maintainability.
