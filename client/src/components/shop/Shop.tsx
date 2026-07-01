import { useMemo, useState } from "react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ProductGrid from "./ProductGrid";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Groceries",
  "Healthcare",
  "Senior Care",
];

const Shop = () => {
  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const searchMatch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Shop Products
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Discover products for every generation.
          </p>
        </div>

        {/* Search */}
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {/* Category Filters */}
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Products */}
        <ProductGrid
          products={filteredProducts}
          onAddToCart={(product) =>
            addToCart({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            })
          }
        />

      </div>
    </section>
  );
};

export default Shop;