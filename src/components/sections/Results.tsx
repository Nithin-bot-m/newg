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
    <section className="bg-gradient-to-b from-[#04150E] via-[#062117] to-[#04150E] py-12 sm:py-20 lg:py-24 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Placement Track Record
          </h2>
          <p className="mt-3.5 sm:mt-4 text-emerald-100/80 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Real students. Real companies. Real salaries. Here&apos;s what Greenroots has delivered.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/[0.04] hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-[#10B981]/40 rounded-2xl p-3.5 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#34d399] via-[#86efac] to-[#FB923C] bg-clip-text text-transparent">
                <AnimateCount value={s.value} suffix={s.suffix} duration={2} />
              </div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-emerald-100/80 leading-snug">
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
