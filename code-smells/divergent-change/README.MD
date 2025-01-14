# Divergent Change

## Task Description

### Task 1

You have a UserAccount class that contains methods related to account management, login, and reporting. Your task is to separate these responsibilities into distinct classes.

Code to Refactor:

```csharp
public class UserAccount
{
    public string Username { get; set; }
    public string Password { get; set; }

    public void Login(string username, string password)
    {
        // Login logic
        Console.WriteLine("User logged in.");
    }

    public void Logout()
    {
        // Logout logic
        Console.WriteLine("User logged out.");
    }

    public void GenerateReport()
    {
        // Report generation logic
        Console.WriteLine("Generating user report.");
    }
}
```
Steps to Refactor:
1. Create separate classes AuthenticationService and UserReportGenerator for the respective responsibilities.
2. Move the appropriate methods to these new classes.
3. Remove unnecessary methods from the UserAccount class, keeping only properties and methods directly related to the user account.
