import { PdfWriter } from './PdfWriter'

export class InvoiceGenerator {

	public generateInvoice(): void {
		const invoiceNumber = 12345 // Local variable
		const pdfWriter = new PdfWriter(`Invoice_${invoiceNumber}.pdf`) // Local variable
		pdfWriter.write('Invoice Content')
		pdfWriter.close()
	}
    
	public otherMethod(): void {
		// Method that does not use the temporary fields
	}
}
