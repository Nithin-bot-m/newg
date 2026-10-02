"use client";

import { ImagePlaceholder } from "@/components/placeholders";
import { StaggeredFadeGrid } from "@/components/animmaster/staggered-fade-grid";

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a]">
            Our Hyderabad Campus
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Manjeera Majestic Commercial, JNTU Road, Hyderabad — walk-in counselling for tech training and overseas education under one roof.
          </p>
        </div>

        {/* Animmaster: Staggered Fade-In Grid */}
        <StaggeredFadeGrid
          className="grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          staggerDelay={0.12}
        >
          {CAMPUS_HUBS.map((hub, i) => (
            <div
              key={`hub-${i}`}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300 h-full border border-gray-100"
            >
              <ImagePlaceholder
                label={hub.name}
                className="aspect-[3/4] w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {hub.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">{hub.tag}</p>
              </div>
            </div>
          ))}
        </StaggeredFadeGrid>
      </div>
    </section>
  );
}
