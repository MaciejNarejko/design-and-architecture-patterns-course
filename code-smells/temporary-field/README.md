# Temporary Field

## Task Description

### Task 1

You have a class `InvoiceGenerator` that uses temporary fields (`_invoiceNumber`, `_pdfWriter`) only in one method, `GenerateInvoice`. Your task is to remove these fields and convert them into local variables.

---

### Code to Refactor

```csharp
public class InvoiceGenerator
{
    private int _invoiceNumber; // Temporary field used only in one method
    private PdfWriter _pdfWriter; // Temporary field used only in one method

    public void GenerateInvoice()
    {
        _invoiceNumber = 12345;
        _pdfWriter = new PdfWriter($"Invoice_{_invoiceNumber}.pdf");
        
        // Generating the invoice
        _pdfWriter.Write("Invoice Content");
        _pdfWriter.Close();
    }

    public void OtherMethod()
    {
        // Method that does not use the temporary fields
    }
}
```

### Steps to Complete

1. Remove the temporary fields (_invoiceNumber, _pdfWriter) from the InvoiceGenerator class.
2. Transform these temporary fields into local variables inside the GenerateInvoice method.
3. Ensure the code is cleaner, more consistent, and easier to maintain after refactoring.

