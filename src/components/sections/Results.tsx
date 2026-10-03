import { ImagePlaceholder } from "@/components/placeholders";
import { AnimateCount } from "@/components/unlumen/animate-count";

const STATS = [
  { value: 8, suffix: "", label: "High-Demand Programs" },
  { value: 100, suffix: "%", label: "Placement Track Record" },
  { value: 500, suffix: "+", label: "Students Guided" },
  { value: 10, suffix: "+", label: "Yrs Trainer Experience" },
];

export function Results() {
  return (
    <section className="bg-gradient-to-b from-[#040E1C] via-[#071D3A] to-[#051429] py-16 lg:py-24 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Placement Track Record
          </h2>
          <p className="mt-4 text-gray-300/90 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Real students. Real companies. Real salaries. Here&apos;s what Greenroots has delivered.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-16">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/[0.04] hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-[#32D583]/40 rounded-2xl p-4 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#32D583] to-[#38bdf8] bg-clip-text text-transparent">
                <AnimateCount value={s.value} suffix={s.suffix} duration={2} />
              </div>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-gray-300/90 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-white/25 transition-all duration-300"
            >
              <ImagePlaceholder
                dark
                label={`Result photo ${i + 1}`}
                className="aspect-[4/3] w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
