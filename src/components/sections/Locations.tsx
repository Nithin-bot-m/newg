"use client";

import { ImagePlaceholder } from "@/components/placeholders";
import { StaggeredFadeGrid } from "@/components/animmaster/staggered-fade-grid";
import { TiltCard } from "@/components/smoothui/tilt-card";

const CAMPUS_HUBS = [
  { name: "Tech Labs", tag: "High-spec workstations & dual monitors" },
  { name: "Global Study Hub", tag: "Overseas counselling & visa desk" },
  { name: "Interview Studio", tag: "Mock panel & HR simulations" },
  { name: "Collaboration Hub", tag: "Peer coding & project lounge" },
];

export function Locations() {
  return (
    <section id="locations" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A] tracking-tight">
            Our Hyderabad Campus
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Unit 206, Manjeera Majestic Commercial, Opposite JNTU, Next to Lulu Mall, Kukatpally, Hyderabad — walk-in career audit and overseas education counselling under one roof.
          </p>
        </div>

        {/* Animmaster: Staggered Fade-In Grid with SmoothUI 3D TiltCards */}
        <StaggeredFadeGrid
          className="grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          staggerDelay={0.12}
        >
          {CAMPUS_HUBS.map((hub, i) => (
            <TiltCard
              key={`hub-${i}`}
              maxTilt={8}
              glareColor="rgba(8, 120, 232, 0.18)"
              className="group relative overflow-hidden rounded-2xl bg-gray-50 shadow-xs hover:shadow-2xl transition-all duration-300 h-full border border-gray-200/70 hover:border-[#0878E8]/40"
            >
              <ImagePlaceholder
                label={hub.name}
                className="aspect-[3/4] w-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-5 lg:p-6 pointer-events-none backdrop-blur-[1px]">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-[#38bdf8] transition-colors leading-tight">
                  {hub.name}
                </h3>
                <p className="text-[11px] sm:text-xs lg:text-sm text-gray-300/90 mt-1 leading-snug">{hub.tag}</p>
              </div>
            </TiltCard>
          ))}
        </StaggeredFadeGrid>
      </div>
    </section>
  );
}
