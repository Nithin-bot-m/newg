import { ImagePlaceholder } from "@/components/placeholders";
import { AnimateCount } from "@/components/unlumen/animate-count";

const STATS = [
  { value: 8, suffix: "+", label: "Specialised Programs" },
  { value: 85, suffix: "%", label: "Placement Rate" },
  { value: 60, suffix: "+", label: "Alumni Placed" },
  { value: 10, suffix: "+", label: "Yrs Trainer Experience" },
];

export function Results() {
  return (
    <section className="bg-gradient-to-b from-[#040E1C] via-[#071D3A] to-[#051429] py-16 lg:py-24 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Our Placement Track Record
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Real students. Real companies. Real salaries. Here&apos;s what Greenroots has delivered.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/5 ring-1 ring-white/10 rounded-2xl p-6"
            >
              <div className="text-3xl lg:text-5xl font-black text-[#32D583]">
                <AnimateCount value={s.value} suffix={s.suffix} duration={2} />
              </div>
              <div className="mt-2 text-xs lg:text-sm text-gray-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {Array.from({ length: 10 }).map((_, i) => (
            <ImagePlaceholder
              key={i}
              dark
              label={`Result photo ${i + 1}`}
              className="aspect-[4/3] w-full rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
