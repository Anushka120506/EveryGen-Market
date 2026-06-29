import { FiArrowRight, FiShield, FiMic, FiCpu } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-between gap-16 px-6 py-16 lg:flex-row">

        {/* Left Section */}
        <div className="max-w-2xl">

          <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            🌍 Built for Every Generation
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Shopping Made
            <span className="block text-emerald-600">
              Simple for Every Generation.
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            EveryGen Market is an AI-powered, accessibility-first shopping
            platform that makes online shopping easier for seniors, students,
            families and everyone in between.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <button className="flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-4 font-semibold text-white transition hover:bg-emerald-700">
              Shop Now
              <FiArrowRight />
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
              Explore Products
            </button>

          </div>

          {/* Features */}

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">

            <div className="flex items-center gap-3">
              <FiShield className="text-xl text-emerald-600" />
              <span className="font-medium">
                Secure Shopping
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiMic className="text-xl text-emerald-600" />
              <span className="font-medium">
                Voice Search
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiCpu className="text-xl text-emerald-600" />
              <span className="font-medium">
                AI Powered
              </span>
            </div>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex h-[500px] w-full max-w-lg items-center justify-center rounded-3xl border-2 border-dashed border-emerald-300 bg-white shadow-lg">

          <h2 className="text-center text-2xl font-bold text-slate-700">
            Illustration Coming Next
          </h2>

        </div>

      </div>
    </section>
  );
};

export default Hero;