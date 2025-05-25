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
  category: string;
  featured: boolean;
  details: {
    origin: string;
    thickness: string;
    finish: string;
    maintenance: string;
  };
}

export type Category = {
  id: string;
  name: string;
};