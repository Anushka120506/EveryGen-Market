export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Smart Watch",
    category: "Electronics",
    price: 2999,
    rating: 4.8,
    image: "⌚",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    rating: 4.7,
    image: "🎧",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Fashion",
    price: 3499,
    rating: 4.9,
    image: "👟",
  },
  {
    id: 4,
    name: "Organic Grocery Pack",
    category: "Groceries",
    price: 899,
    rating: 4.6,
    image: "🛒",
  },
  {
    id: 5,
    name: "Blood Pressure Monitor",
    category: "Healthcare",
    price: 2499,
    rating: 4.8,
    image: "🩺",
  },
  {
    id: 6,
    name: "Reading Glasses",
    category: "Senior Care",
    price: 799,
    rating: 4.5,
    image: "👓",
  },
];