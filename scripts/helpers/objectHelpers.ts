export interface Product {
	id: number;
	code: string;
	title: string;
}
export function createProduct(newProduct: Product): Product {
	console.log(newProduct);
	return newProduct;
}
