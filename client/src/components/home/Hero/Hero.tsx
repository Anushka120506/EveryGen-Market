import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            🌍 Built for Every Generation
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Shopping Made
            <span className="block text-emerald-600">
              Simple for Every Generation.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            EveryGen Market is an AI-powered shopping platform designed
            for seniors, students, families and everyone in between.
          </p>

        </div>

        <HeroStats />

      </div>
    </section>
  );
};

export default Hero;