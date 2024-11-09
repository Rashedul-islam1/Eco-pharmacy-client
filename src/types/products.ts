export interface Variant {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  name: string;
  slug: string;
  image: string;
  description: string;
  variants: Variant[];
  price: number;
  stockStatus: boolean;
  stockQuantity: number;
  rating: number;
  totalReview: number;
  brand: string;
  category: string;
  status: string;
}
