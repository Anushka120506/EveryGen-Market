import ProductCard from "./ProductCard";
import type { Product } from "../../data/products";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({
  products,
  onAddToCart,
}: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <div className="mt-16 rounded-3xl bg-white p-12 text-center shadow-lg">
        <h2 className="text-3xl font-bold text-slate-800">
          No Products Found
        </h2>

        <p className="mt-4 text-slate-500">
          Try changing your search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          category={product.category}
          price={product.price}
          rating={product.rating}
          image={product.image}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;