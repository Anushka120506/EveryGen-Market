import {
  FiEye,
  FiMic,
  FiType,
  FiMousePointer,
} from "react-icons/fi";

const features = [
  {
    title: "Large Text Mode",
    description:
      "Increase font size for comfortable reading.",
    icon: FiType,
  },
  {
    title: "Voice Navigation",
    description:
      "Navigate the website using voice commands.",
    icon: FiMic,
  },
  {
    title: "High Contrast",
    description:
      "Improve visibility with high-contrast colors.",
    icon: FiEye,
  },
  {
    title: "Easy Click Mode",
    description:
      "Larger buttons for easier interaction.",
    icon: FiMousePointer,
  },
];

const Accessibility = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            ♿ Accessibility Hub
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Shopping Made Accessible
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            EveryGen Market is designed so everyone—from seniors to
            young shoppers—can enjoy a comfortable shopping experience.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
                  <Icon className="text-3xl text-emerald-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Accessibility;