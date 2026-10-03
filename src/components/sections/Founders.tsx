import { AvatarPlaceholder } from "@/components/placeholders";
import { ParticleStarfield } from "@/components/animmaster/particle-starfield";
import { WaveBackground } from "@/components/unlumen/wave-background";
import TiltCard from "@/components/smoothui/tilt-card";
import MagneticButton from "@/components/smoothui/magnetic-button";
import Link from "next/link";

const FOUNDERS = [
  {
    name: "Rushi",
    role: "Head Trainer — Greenroots",
    college: "Enterprise DevOps & Cloud",
    bio: "10+ years of hands-on enterprise DevOps on AWS, GCP, and hybrid stacks. Architect-grade depth leading classroom and live-project training at Greenroots. Has guided 500+ students into roles at top tech companies across India and abroad.",
  },
  {
    name: "Kiran Kumar",
    role: "Chief Technology Mentor",
    college: "Principal Data & Analytics Architect",
    bio: "15+ years of enterprise architecture and data modelling experience. Specialises in Power BI, SQL performance tuning, and executive business intelligence dashboards for Fortune 500 enterprises.",
  },
  {
    name: "Career Audit Team",
    role: "Admissions & Placements",
    college: "Hyderabad Campus Hub",
    bio: "Dedicated 1-on-1 career audit, resume engineering, and placement support team connecting students with our 600+ recruitment partner network across Hyderabad and global tech hubs.",
  },
];

export function Founders() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#051429] via-[#071D3A] to-[#040E1C] overflow-hidden">
      {/* Animmaster: Particle Starfield ambient background */}
      <ParticleStarfield density={0.8} color="#0878E8" />
      {/* Unlumen: Wave Background — animated flowing lines */}
      <WaveBackground color="#0878E8" lineCount={20} opacity={0.12} amplitude={20} speed={0.8} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-[#0878E8]/5 blur-3xl pointer-events-none" />
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
            <TiltCard
              key={`founder-${i}`}
              maxTilt={8}
              scale={1.02}
              glare={true}
              glareOpacity={0.15}
              className="h-full rounded-2xl"
            >
              <div className="h-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 rounded-2xl p-6 lg:p-8 text-center flex flex-col justify-between hover:bg-white/[0.08] transition-colors">
                <div>
                  <AvatarPlaceholder label={f.name || "—"} className="h-24 w-24 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white">{f.name || <span className="text-gray-500">—</span>}</h3>
                  <p className="mt-1 text-sm text-[#38bdf8] font-medium">{f.role || <span className="text-gray-600">—</span>}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{f.college || <span className="text-gray-700">—</span>}</p>
                </div>
                <p className="mt-4 text-sm text-gray-300 leading-relaxed">{f.bio || <span className="text-gray-700">—</span>}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <MagneticButton asChild strength={15}>
            <Link
              href="/become-a-trainer"
              className="px-8 py-3 bg-[#0878E8] text-white font-semibold rounded-lg hover:bg-[#0766c6] transition-colors inline-block shadow-lg shadow-[#0878E8]/25"
            >
              Apply to Join Us as a Trainer
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
