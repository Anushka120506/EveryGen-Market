import { heroStats } from "./heroData";

const HeroStats = () => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6">

      {heroStats.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <h3 className="text-3xl font-bold text-emerald-600">
            {item.number}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {item.label}
          </p>
        </div>
      ))}

    </div>
  );
};

export default HeroStats;