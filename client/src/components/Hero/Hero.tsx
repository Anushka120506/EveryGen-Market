import { FiArrowRight, FiShield, FiUsers } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">

        {/* Left Content */}
        <div className="max-w-2xl">

          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
            <FiUsers />
            Designed for Every Generation
          </span>

          <h1 className="text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
            Shopping Made
            <span className="block text-emerald-600">
              Simple for Every Generation.
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            EveryGen Market is an accessibility-first shopping platform
            designed for people of all ages. Whether you're a senior citizen
            looking for a simple experience or a young shopper seeking speed,
            we make online shopping comfortable, intuitive, and enjoyable.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700">
              Shop Now
              <FiArrowRight />
            </button>

            <button className="rounded-xl border border-slate-300 px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
              Explore Products
            </button>

          </div>

          <div className="mt-12 flex flex-wrap gap-8">

            <div className="flex items-center gap-3">
              <FiShield className="text-2xl text-emerald-600" />
              <span className="font-medium text-slate-700">
                Secure Shopping
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiUsers className="text-2xl text-emerald-600" />
              <span className="font-medium text-slate-700">
                Accessibility First
              </span>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex h-[500px] w-full max-w-lg items-center justify-center rounded-3xl border-2 border-dashed border-emerald-300 bg-white shadow-lg">

          <div className="text-center">

            <h2 className="text-2xl font-bold text-slate-800">
              Hero Illustration
            </h2>

            <p className="mt-3 text-slate-500">
              Premium illustration will be added here.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;