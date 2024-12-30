# Long Parameter List

## Task Description

### Task 1

You have a method RegisterProduct that takes many parameters related to a product. Your task is to replace the long list of parameters with a single ProductInfo object.

```csharp
public void RegisterProduct(string productName, string category, decimal price, int stock, string supplierName, string supplierContact)
{
    // Product registration
    Console.WriteLine($"Product: {productName}, Category: {category}, Price: {price:C}, Stock: {stock}, Supplier: {supplierName}, Contact: {supplierContact}");
}
```

#### Steps to complete:

1. Create a new class ProductInfo that will group all the parameters related to the product.
2. Replace the parameter list in the RegisterProduct method with a single ProductInfo object.
3. Update the logic of the method to use the new object.