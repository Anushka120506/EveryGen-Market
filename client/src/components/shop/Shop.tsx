import { useMemo, useState } from "react";
import { products } from "../../data/products";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Groceries",
  "Healthcare",
  "Senior Care",
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return products;
    }

    return products.filter(
      (product) => product.category === selectedCategory
    );
  }, [selectedCategory]);

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

        {/* Category Filters */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-3 font-semibold transition ${
                selectedCategory === category
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-slate-700 shadow"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Product Grid */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-32 items-center justify-center rounded-2xl bg-slate-100 text-6xl">
                {product.image}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {product.name}
              </h3>

              <p className="mt-2 text-slate-500">
                {product.category}
              </p>

              <p className="mt-3 text-yellow-500">
                ⭐ {product.rating}
              </p>

              <p className="mt-4 text-3xl font-bold text-emerald-600">
                ₹{product.price}
              </p>

              <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700">
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Shop;