export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
}

export interface ApiCall {
    products: Product[],
    total: number,
    skip: number,
    limit: number
}