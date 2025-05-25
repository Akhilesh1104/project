export interface ProductDetails {
  origin: string;
  finish: string;
  recommended: string[];
  dimensions: string;
  inStock: boolean;
}

export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  unit: string;
  image: string;
  description: string;
  details: ProductDetails;
  featured: boolean;
}

export type Category = {
  id: string;
  name: string;
};