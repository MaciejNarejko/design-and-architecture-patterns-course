class ProductInfo {
	constructor(
		public productName: string,
		public category: string,
		public price: number,
		public stock: number,
		public supplierName: string,
		public supplierContact: string
	) {}
}

function RegisterProduct(productInfo: ProductInfo): void {
	console.log(
		`Product: ${productInfo.productName}, Category: ${productInfo.category}, Price: $${productInfo.price.toFixed(
			2
		)}, Stock: ${productInfo.stock}, Supplier: ${productInfo.supplierName}, Contact: ${productInfo.supplierContact}`
	)
}
