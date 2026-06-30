import { FiMic, FiSearch, FiCpu } from "react-icons/fi";

const AIAssistant = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            🤖 AI Shopping Assistant
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Shop Smarter with AI
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Describe what you need, and EveryGen Market will recommend the
            best products for you.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">

          <FiSearch className="text-2xl text-slate-500" />

          <input
            type="text"
            placeholder="Search with AI..."
            className="flex-1 outline-none"
          />

          <button className="rounded-xl bg-emerald-600 p-3 text-white hover:bg-emerald-700">
            <FiMic size={20} />
          </button>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-slate-50 p-6 shadow-md">
            <FiCpu className="text-4xl text-emerald-600" />
            <h3 className="mt-5 text-2xl font-semibold">
              Personalized AI
            </h3>
            <p className="mt-3 text-slate-600">
              Get recommendations based on your needs.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6 shadow-md">
            <FiMic className="text-4xl text-emerald-600" />
            <h3 className="mt-5 text-2xl font-semibold">
              Voice Shopping
            </h3>
            <p className="mt-3 text-slate-600">
              Search products using your voice.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-6 shadow-md">
            <FiSearch className="text-4xl text-emerald-600" />
            <h3 className="mt-5 text-2xl font-semibold">
              Smart Search
            </h3>
            <p className="mt-3 text-slate-600">
              Find products faster with AI-powered search.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AIAssistant;