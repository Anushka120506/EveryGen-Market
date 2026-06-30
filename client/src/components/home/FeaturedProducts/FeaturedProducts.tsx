import { featuredProducts } from "./productData";

const FeaturedProducts = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Featured Products
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Handpicked products loved by customers across every generation.
          </p>

        </div>

        {/* Products Grid */}

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {featuredProducts.map((product) => (

            <div
              key={product.id}
              className="rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Product Image */}

              <div className="flex h-28 items-center justify-center rounded-2xl bg-slate-100 text-6xl">
                {product.image}
              </div>

              {/* Product Name */}

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {product.name}
              </h3>

              {/* Rating */}

              <p className="mt-2 text-yellow-500">
                ⭐ {product.rating}
              </p>

              {/* Price */}

              <p className="mt-3 text-2xl font-bold text-emerald-600">
                {product.price}
              </p>

              {/* Button */}

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

export default FeaturedProducts;