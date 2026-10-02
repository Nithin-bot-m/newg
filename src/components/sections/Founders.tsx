import { AvatarPlaceholder } from "@/components/placeholders";
import { ParticleStarfield } from "@/components/animmaster/particle-starfield";
import { WaveBackground } from "@/components/unlumen/wave-background";

const FOUNDERS = [
  {
    name: "Rushi",
    role: "Head Trainer — Greenroots",
    college: "Enterprise DevOps & Cloud",
    bio: "A decade of hands-on enterprise DevOps and Cloud experience, leading classroom and live-project training at Greenroots. Has guided 500+ students into roles at top tech companies across India and abroad.",
  },
  {
    name: "",
    role: "",
    college: "",
    bio: "",
  },
  {
    name: "",
    role: "",
    college: "",
    bio: "",
  },
];

export function Founders() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#04190f] via-[#072517] to-[#04160d] overflow-hidden">
      {/* Animmaster: Particle Starfield ambient background */}
      <ParticleStarfield density={0.8} color="#FC6C18" />
      {/* Unlumen: Wave Background — animated flowing lines */}
      <WaveBackground color="#FC6C18" lineCount={20} opacity={0.12} amplitude={20} speed={0.8} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-[#FC6C18]/5 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Built by trainers who’ve done the job you’re aiming for
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            All instructors have 10+ years of active industry experience. They don’t just teach — they’ve done the job you’re aiming for.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {FOUNDERS.map((f, i) => (
            <div
              key={`founder-${i}`}
              className="bg-white/5 ring-1 ring-white/10 rounded-2xl p-6 lg:p-8 text-center"
            >
              <AvatarPlaceholder label={f.name || "—"} className="h-24 w-24 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">{f.name || <span className="text-gray-500">—</span>}</h3>
              <p className="mt-1 text-sm text-[#FC6C18] font-medium">{f.role || <span className="text-gray-600">—</span>}</p>
              <p className="text-xs text-gray-500 mt-0.5">{f.college || <span className="text-gray-700">—</span>}</p>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">{f.bio || <span className="text-gray-700">—</span>}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-[#FC6C18] text-white font-semibold rounded-lg hover:bg-[#e55a0a] transition-colors">
            Apply to Join Us as a Trainer
          </button>
        </div>
      </div>
    </section>
  );
}
