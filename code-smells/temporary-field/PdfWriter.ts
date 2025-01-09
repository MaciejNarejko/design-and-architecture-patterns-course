export class PdfWriter {

	constructor(private fileName: string) {}

	public write(content: string): void {
		console.log(`Writing to ${this.fileName}: ${content}`)
	}
    
	public close(): void {
		console.log(`Closing file ${this.fileName}`)
	}
}
