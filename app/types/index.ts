export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "men" | "women" | "kids" | "accessories" | "new arrivals" | "sale";
  size?: "XS" | "S" | "M" | "L" | "XL";
  color?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
