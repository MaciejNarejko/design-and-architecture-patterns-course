# Builder Pattern Implementation

## Task Description

### Task 1

1. Create an abstract class `WarriorBuilder`.
2. Create the following classes:
   - `InfantrymanBuilder`
   - `ArcherBuilder`
   - `CavalrymanBuilder`
3. Create a `Garrison` class responsible for training warriors of the appropriate profession.
4. The training should consist of the following 3 steps:
   1. Enrolling in the army (creating an object of the appropriate type).
   2. Receiving a weapon.
   3. Combat training.
5. Use the warrior classes from the previous task.
6. Create a new garrison and add the following warriors:
   - 2 infantrymen
   - 2 cavalrymen
   - 2 archers
7. You can use the `IWarrior` interface and a generic list `List<IWarrior>`.
