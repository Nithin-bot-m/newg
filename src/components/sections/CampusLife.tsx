"use client";

import { ImagePlaceholder } from "@/components/placeholders";
import MagneticButton from "@/components/smoothui/magnetic-button";

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

const CAMPUS_PHOTOS = Array.from({ length: 6 });

export function CampusLife() {
  return (
    <section id="campus" className="relative py-12 sm:py-20 lg:py-24 bg-[#071D3A] overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#0878E8]/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
          {/* Left: copy + tags (5 cols) */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Empowering Students. Enabling Careers.
            </h2>
            <div className="mt-6 space-y-3.5 sm:space-y-4">
              {BULLET_POINTS.map((b) => (
                <div key={b} className="flex items-start gap-3 text-slate-300">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-[#0878E8]/20 text-[#38bdf8] ring-1 ring-[#0878E8]/40 shrink-0 mt-0.5">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-xs sm:text-base leading-relaxed text-slate-300">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold text-slate-300 bg-white/[0.06] hover:bg-white/[0.12] hover:text-white border border-white/10 hover:border-[#0878E8]/40 transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row sm:items-center gap-3.5">
              <MagneticButton asChild>
                <a
                  href="#contact"
                  className="w-full sm:w-auto min-h-[48px] text-center px-7 py-3.5 bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0766c6] hover:to-[#00a3cc] shadow-lg shadow-[#0878E8]/25 hover:shadow-xl active:scale-[0.98] transition-all inline-flex items-center justify-center cursor-pointer"
                >
                  Book a Free Career Audit
                </a>
              </MagneticButton>
              <MagneticButton asChild>
                <a
                  href="#contact"
                  className="w-full sm:w-auto min-h-[48px] text-center px-7 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 active:scale-[0.98] transition-all inline-flex items-center justify-center backdrop-blur-xs cursor-pointer"
                >
                  Talk to a Counsellor
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right: Editorial asymmetric photo gallery (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-2 row-span-1 sm:row-span-2 rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
              <ImagePlaceholder
                dark
                label="Campus photo 1"
                className="aspect-[16/10] sm:aspect-[4/3] w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md group">
              <ImagePlaceholder
                dark
                label="Campus photo 2"
                className="aspect-square w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md group">
              <ImagePlaceholder
                dark
                label="Campus photo 3"
                className="aspect-square w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md group">
              <ImagePlaceholder
                dark
                label="Campus photo 4"
                className="aspect-square w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md group">
              <ImagePlaceholder
                dark
                label="Campus photo 5"
                className="aspect-square w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-md group">
              <ImagePlaceholder
                dark
                label="Campus photo 6"
                className="aspect-square w-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
