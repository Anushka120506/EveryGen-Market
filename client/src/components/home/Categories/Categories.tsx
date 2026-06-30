import { categories } from "./categoryData";

const Categories = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Shop by Category
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Discover products designed for every generation.
          </p>

        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${category.color}`}
                >
                  <Icon className="text-3xl text-slate-700" />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  Explore the best {category.title.toLowerCase()} products.
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Categories;