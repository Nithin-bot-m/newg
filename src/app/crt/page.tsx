"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Check, X, Building, BookOpen, Clock, Users, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";

const PHASES = [
  {
    phase: "Phase 1 — Foundation",
    title: "Foundation Building",
    desc: "Students begin by strengthening their communication basics — the bedrock that determines if a student gets shortlisted or rejected at first contact.",
    modules: [
      "Communication Fundamentals",
      "Grammar & Vocabulary",
      "Confidence Building",
      "Personality Development",
      "Professional Grooming",
    ],
    outcome: "Students become comfortable speaking and expressing ideas clearly.",
  },
  {
    phase: "Phase 2 — Aptitude",
    title: "Aptitude & Reasoning Mastery",
    desc: "We train students to crack placement tests from TCS, Infosys, Wipro, Capgemini and more — covering both quantitative and logical reasoning at speed.",
    modules: [
      "Number System · Percentages · P&L",
      "Time & Work · Speed & Distance",
      "Ratios · Averages · Probability",
      "Puzzles & Seating Arrangements",
      "Blood Relations · Syllogisms",
      "Data Interpretation & Analysis",
    ],
    outcome: "Students become confident solving aptitude questions under time pressure.",
  },
  {
    phase: "Phase 3 — Verbal Ability",
    title: "Verbal Ability & English for Placements",
    desc: "Our core strength and biggest USP. Companies reject technically strong students for poor communication — we fix that completely.",
    modules: [
      "Reading Comprehension",
      "Para Jumbles & Sentence Correction",
      "Error Detection & Grammar Nuances",
      "Vocabulary Building & Idioms",
      "Email Writing & Professional Etiquette",
      "Corporate Communication Protocols",
    ],
    outcome: "Students gain fluency, clarity, and corporate communication skills.",
  },
  {
    phase: "Phase 4 — Placement Prep",
    title: "Placement Preparation",
    desc: "The final mile — resume building, interview coaching, mock panel simulations, and group discussion practice to make students truly offer-ready.",
    modules: [
      "ATS-Friendly Resume Engineering",
      "Personalised Profile Reviews",
      "LinkedIn Profile Optimisation",
      "HR Interview Coaching & Storytelling",
      "Technical Interview Readiness",
      "Mock Panels & Group Discussions",
    ],
    outcome: "Students become interview-ready and confident.",
  },
];

const METHODOLOGY = [
  {
    title: "Interactive Training",
    desc: "No boring lectures. We use activities, role plays, group discussions, and real interview simulations — so learning sticks and confidence builds naturally.",
  },
  {
    title: "Continuous Assessment",
    desc: "Weekly tests, mock interviews, assignments, and performance tracking. Every student's progress is measurable — not assumed.",
  },
  {
    title: "Personalised Mentorship",
    desc: "1-on-1 guidance to improve weak areas, boost confidence, and track individual progress. No student is left behind.",
  },
  {
    title: "Corporate Simulation",
    desc: "We create a mini corporate atmosphere so students experience real workplace expectations before they walk into a placement interview.",
  },
];

const FORMATS = [
  { hours: "40–60h", title: "CRT Sprint", desc: "Focused sprint for final-year students ahead of the active placement season." },
  { hours: "80–120h", title: "Comprehensive Track", desc: "Deep dive across all four phases — our most complete placement readiness program." },
  { hours: "Semester", title: "Semester-Long CRT", desc: "Integrated across a semester for sustainable learning without academic disruption." },
  { hours: "Bootcamp", title: "Final Year Bootcamp", desc: "High-intensity placement bootcamp with daily mock interviews and company-specific mocks." },
  { hours: "Faculty", title: "Faculty Development", desc: "Upskilling college faculty on industry expectations and placement coaching methods." },
];

export default function CRTPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* CRT Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f9f5] via-white to-white py-10 sm:py-14 lg:py-20 border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(22,101,52,0.08),rgba(8,120,232,0.04)_60%,transparent_100%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-3.5 py-1 text-xs font-semibold text-[#166534] mb-4 border border-[#166534]/20 backdrop-blur-xs">
              <Building className="h-3.5 w-3.5 text-amber-500" />
              <ShineText baseColor="#166534" shineColor="#15803d" duration={2}>
                College Partnership Program · Hyderabad Campus Hub
              </ShineText>
            </span>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Campus Recruitment Training — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] via-[#15803d] to-[#0878E8]">CRT</span>
            </h1>
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Greenroots partners with colleges to bridge the gap between academia and industry — transforming students into placement-ready, interview-confident professionals.
            </p>

            {/* Badges */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
              <span className="px-3 py-1.5 bg-white/90 backdrop-blur-xs border border-slate-200/90 rounded-full shadow-2xs hover:border-emerald-300 hover:shadow-xs transition-all">
                📍 Kukatpally, Hyderabad
              </span>
              <span className="px-3 py-1.5 bg-white/90 backdrop-blur-xs border border-slate-200/90 rounded-full shadow-2xs hover:border-emerald-300 hover:shadow-xs transition-all">
                🎓 Engineering &amp; Degree Colleges
              </span>
              <span className="px-3 py-1.5 bg-white/90 backdrop-blur-xs border border-slate-200/90 rounded-full shadow-2xs hover:border-emerald-300 hover:shadow-xs transition-all">
                ⏱️ 40–120 Hour Programs
              </span>
              <span className="px-3 py-1.5 bg-white/90 backdrop-blur-xs border border-slate-200/90 rounded-full shadow-2xs hover:border-emerald-300 hover:shadow-xs transition-all">
                🗓️ Semester to Full-Year Tracks
              </span>
            </div>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-3.5">
              <MagneticButton asChild strength={14} className="w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto min-h-[48px] justify-center px-7 py-3.5 bg-gradient-to-r from-[#166534] to-[#15803d] text-white font-bold rounded-xl hover:from-[#14532d] hover:to-[#166534] transition-all shadow-md shadow-emerald-950/20 hover:shadow-lg hover:shadow-emerald-900/30 inline-flex items-center gap-2 cursor-pointer text-center"
                >
                  Partner With Us →
                </Link>
              </MagneticButton>
              <MagneticButton asChild strength={10} className="w-full sm:w-auto">
                <a
                  href="#curriculum"
                  className="w-full sm:w-auto min-h-[48px] justify-center px-7 py-3.5 bg-white border border-slate-200/90 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all shadow-2xs inline-flex items-center gap-2 cursor-pointer text-center"
                >
                  View Curriculum ↓
                </a>
              </MagneticButton>
            </div>

            {/* Mission banner */}
            <div className="mt-8 sm:mt-10 max-w-3xl mx-auto bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 sm:p-4.5 text-xs sm:text-sm text-[#166534] font-medium shadow-2xs backdrop-blur-xs">
              <strong>Our Mission:</strong> Every student deserves the skills, confidence, and opportunities required to build a successful career.
            </div>
          </div>
        </section>

        {/* 3 Challenges Faced */}
        <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
              The Problem We Solve
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
              3 Challenges Every College Student Faces
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">Greenroots solves all three — end to end.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-8">
            <TiltCard maxTilt={6} scale={1.02} glare={true} glareOpacity={0.08} className="h-full rounded-2xl">
              <div className="h-full bg-white p-5 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-50 text-[#166534] font-black text-base ring-1 ring-emerald-200/70 mb-4 group-hover:scale-105 transition-transform duration-300">
                    01
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Communication &amp; Interview Confidence</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Most students are technically capable but fail interviews because they can&apos;t articulate their thoughts clearly or confidently in English.
                  </p>
                </div>
              </div>
            </TiltCard>
            <TiltCard maxTilt={6} scale={1.02} glare={true} glareOpacity={0.08} className="h-full rounded-2xl">
              <div className="h-full bg-white p-5 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-50 text-[#166534] font-black text-base ring-1 ring-emerald-200/70 mb-4 group-hover:scale-105 transition-transform duration-300">
                    02
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Aptitude &amp; Reasoning Gaps</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Campus hiring tests from TCS, Infosys, Accenture require strong quantitative and logical reasoning — skills rarely built in regular classrooms.
                  </p>
                </div>
              </div>
            </TiltCard>
            <TiltCard maxTilt={6} scale={1.02} glare={true} glareOpacity={0.08} className="h-full rounded-2xl">
              <div className="h-full bg-white p-5 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-50 text-[#166534] font-black text-base ring-1 ring-emerald-200/70 mb-4 group-hover:scale-105 transition-transform duration-300">
                    03
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">No Industry Exposure</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Students graduate without ever experiencing corporate workflows, real tools, or professional workplace expectations — leaving them unprepared.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* 4 Phases Curriculum */}
        <section id="curriculum" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fbfdfa] via-white to-[#fbfdfa] border-y border-slate-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
                CRT Curriculum
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
                A Complete Transformation Journey
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
                Not a short workshop. A structured 4-phase program that rebuilds the student from inside out.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
              {PHASES.map((p, idx) => (
                <div
                  key={p.phase}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 sm:p-8 shadow-xs hover:shadow-lg hover:border-emerald-300/70 transition-all duration-300 flex flex-col md:flex-row gap-5 sm:gap-6 items-start group"
                >
                  <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-[#166534] to-[#0f3f21] text-white font-black flex items-center justify-center text-base sm:text-lg shrink-0 shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform duration-300">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono font-semibold text-[#166534] uppercase tracking-wide">
                      {p.phase}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-1 mb-2">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3.5">
                      {p.modules.map((m) => (
                        <span key={m} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-50 border border-slate-200/60 rounded-xl text-[11px] sm:text-xs font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors">
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="p-3 bg-emerald-50/80 border border-emerald-200/60 rounded-xl text-xs font-bold text-[#166534]">
                      ✦ Outcome: {p.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Methodology */}
        <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
              How We Train
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
              Training Methodology That Actually Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {METHODOLOGY.map((m) => (
              <div key={m.title} className="p-5 sm:p-6 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-gray-900 mb-2">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Flexible Formats */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#fafaf9] to-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
                Program Options
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
                Flexible Training Formats for Colleges
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {FORMATS.map((f) => (
                <div key={f.title} className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                  <span className="px-2.5 py-1 bg-emerald-50 text-[#166534] border border-emerald-200/60 font-bold text-xs rounded-lg inline-block">
                    {f.hours}
                  </span>
                  <h4 className="font-bold text-sm text-gray-900 mt-3 mb-1.5">{f.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Partnership CTA */}
            <div className="relative overflow-hidden mt-12 sm:mt-14 max-w-3xl mx-auto bg-gradient-to-br from-[#071D3A] via-[#0b294f] to-[#166534] rounded-3xl p-6 sm:p-12 text-white text-center shadow-2xl border border-white/10">
              <BorderBeam
                colorFrom="#34d399"
                colorTo="#38bdf8"
                duration={6}
                size={140}
                borderWidth={1.5}
                radius={24}
              />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-3xl font-black tracking-tight">
                  Let&apos;s Build Placement-Ready Careers Together
                </h3>
                <p className="text-xs sm:text-base text-slate-200 mt-2 max-w-xl mx-auto leading-relaxed">
                  We partner with college management and placement cells for structured semester and annual training drives.
                </p>
                <div className="mt-6 sm:mt-7">
                  <MagneticButton asChild strength={15} className="w-full sm:w-auto">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto min-h-[48px] justify-center px-7 py-3.5 bg-white text-[#166534] hover:text-[#14532d] font-bold rounded-xl hover:bg-slate-50 transition-all inline-flex items-center shadow-md cursor-pointer text-center"
                    >
                      Start a Partnership Conversation →
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
