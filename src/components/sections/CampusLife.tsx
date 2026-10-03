"use client";

import { ImagePlaceholder } from "@/components/placeholders";
import { HorizontalParallaxScroll } from "@/components/animmaster/horizontal-parallax-scroll";

const TAGS = [
  "Communication Fundamentals",
  "Group Discussions",
  "Mock Panels",
  "HR Interview Coaching",
  "Corporate Communication",
  "Personality Development",
];

const BULLET_POINTS = [
  "A mini corporate atmosphere so students experience real workplace expectations before they walk into a placement interview.",
  "1-on-1 guidance to improve weak areas, boost confidence, and track individual progress. No student is left behind.",
  "Weekly tests, mock interviews, assignments, and performance tracking. Every student’s progress is measurable — not assumed.",
];

const CAMPUS_PHOTOS = Array.from({ length: 8 });

export function CampusLife() {
  return (
    <section id="campus" className="relative py-16 lg:py-24 bg-gradient-to-b from-[#051429] via-[#071D3A] to-[#040E1C] overflow-hidden">
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#0878E8]/5 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy + tags */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Empowering Students. Enabling Careers.
            </h2>
            <div className="mt-6 space-y-3.5">
              {BULLET_POINTS.map((b) => (
                <div key={b} className="flex items-start gap-3 text-gray-300">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-[#0878E8]/20 text-[#38bdf8] ring-1 ring-[#0878E8]/40 shrink-0 mt-0.5">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed text-gray-300/90">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-gray-300 bg-white/[0.06] hover:bg-white/[0.12] hover:text-white ring-1 ring-white/10 hover:ring-[#0878E8]/40 transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-7 py-3.5 bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0766c6] hover:to-[#00a3cc] shadow-lg shadow-[#0878E8]/25 hover:shadow-xl active:scale-[0.98] transition-all inline-block"
              >
                Book a Free Career Audit
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 active:scale-[0.98] transition-all inline-block backdrop-blur-xs"
              >
                Talk to a Counsellor
              </a>
            </div>
          </div>

          {/* Right: static image grid (kept for desktop) */}
          <div className="hidden lg:grid grid-cols-3 gap-3">
            {CAMPUS_PHOTOS.slice(0, 6).map((_, i) => (
              <ImagePlaceholder
                key={i}
                dark
                label={`Campus photo ${i + 1}`}
                className={`w-full rounded-xl ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animmaster: Horizontal Parallax Scroll — full-width photo strip below the two-column block */}
      <div className="mt-12 lg:mt-16">
        <HorizontalParallaxScroll
          speed={40}
          direction="left"
          className="py-4"
        >
          {CAMPUS_PHOTOS.map((_, i) => (
            <div
              key={i}
              className="w-64 sm:w-80 shrink-0"
            >
              <ImagePlaceholder
                dark
                label={`Campus photo ${i + 1}`}
                className="aspect-[4/3] w-full rounded-xl"
              />
            </div>
          ))}
        </HorizontalParallaxScroll>
      </div>
    </section>
  );
}
