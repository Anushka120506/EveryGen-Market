import { FiArrowRight, FiShield, FiUsers } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row">
        {/* Left */}
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

        {/* Right */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            <h3 className="mb-6 text-2xl font-bold text-slate-900">
              EveryGen Market
            </h3>

            <div className="space-y-5">
              <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                <span className="font-medium">Senior Friendly</span>
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm text-white">
                  Enabled
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                <span className="font-medium">Accessibility Score</span>
                <span className="font-bold text-emerald-600">98%</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">
                <span className="font-medium">Checkout Steps</span>
                <span className="font-bold">Only 3</span>
              </div>
            </div>
          </div>

          <div className="absolute -left-5 top-10 rounded-2xl bg-white p-5 shadow-xl">
            <h4 className="text-3xl font-bold text-emerald-600">10K+</h4>
            <p className="text-sm text-slate-500">Happy Customers</p>
          </div>

          <div className="absolute -bottom-5 right-0 rounded-2xl bg-white p-5 shadow-xl">
            <h4 className="text-3xl font-bold text-emerald-600">500+</h4>
            <p className="text-sm text-slate-500">Trusted Brands</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;