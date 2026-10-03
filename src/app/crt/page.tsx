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
        <section className="bg-gradient-to-b from-[#f3f9f5] via-white to-white py-12 lg:py-16 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-4 py-1 text-xs font-semibold text-[#166534] mb-4 border border-[#166534]/20">
              <Building className="h-3.5 w-3.5 text-amber-500" />
              <ShineText baseColor="#166534" shineColor="#15803d" duration={2}>
                College Partnership Program · Hyderabad Campus Hub
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Campus Recruitment Training — <span className="text-[#166534]">CRT</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Greenroots partners with colleges to bridge the gap between academia and industry — transforming students into placement-ready, interview-confident professionals.
            </p>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <span className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full shadow-2xs">
                📍 Kukatpally, Hyderabad
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full shadow-2xs">
                🎓 Engineering &amp; Degree Colleges
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full shadow-2xs">
                ⏱️ 40–120 Hour Programs
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full shadow-2xs">
                🗓️ Semester to Full-Year Tracks
              </span>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <MagneticButton asChild strength={14}>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-[#166534] text-white font-bold rounded-xl hover:bg-[#14532d] transition-all shadow-md inline-flex items-center gap-2"
                >
                  Partner With Us →
                </Link>
              </MagneticButton>
              <MagneticButton asChild strength={10}>
                <a
                  href="#curriculum"
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all inline-flex items-center gap-2"
                >
                  View Curriculum ↓
                </a>
              </MagneticButton>
            </div>

            {/* Mission banner */}
            <div className="mt-10 max-w-3xl mx-auto bg-[#166534]/5 border border-[#166534]/20 rounded-xl p-4 text-sm text-[#166534] font-medium">
              <strong>Our Mission:</strong> Every student deserves the skills, confidence, and opportunities required to build a successful career.
            </div>
          </div>
        </section>

        {/* 3 Challenges Faced */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
              The Problem We Solve
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1">
              3 Challenges Every College Student Faces
            </h2>
            <p className="text-gray-600 text-sm mt-2">Greenroots solves all three — end to end.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TiltCard maxTilt={7} scale={1.02} glare={true} glareOpacity={0.12} className="h-full rounded-2xl">
              <div className="h-full bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl transition-all">
                <div className="text-2xl font-black text-[#166534] mb-3">01</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Communication &amp; Interview Confidence</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Most students are technically capable but fail interviews because they can&apos;t articulate their thoughts clearly or confidently in English.
                </p>
              </div>
            </TiltCard>
            <TiltCard maxTilt={7} scale={1.02} glare={true} glareOpacity={0.12} className="h-full rounded-2xl">
              <div className="h-full bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl transition-all">
                <div className="text-2xl font-black text-[#166534] mb-3">02</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Aptitude &amp; Reasoning Gaps</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Campus hiring tests from TCS, Infosys, Accenture require strong quantitative and logical reasoning — skills rarely built in regular classrooms.
                </p>
              </div>
            </TiltCard>
            <TiltCard maxTilt={7} scale={1.02} glare={true} glareOpacity={0.12} className="h-full rounded-2xl">
              <div className="h-full bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl transition-all">
                <div className="text-2xl font-black text-[#166534] mb-3">03</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">No Industry Exposure</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Students graduate without ever experiencing corporate workflows, real tools, or professional workplace expectations — leaving them unprepared.
                </p>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* 4 Phases Curriculum */}
        <section id="curriculum" className="py-16 bg-[#fbfdfa] border-y border-gray-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
                CRT Curriculum
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1">
                A Complete Transformation Journey
              </h2>
              <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
                Not a short workshop. A structured 4-phase program that rebuilds the student from inside out.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {PHASES.map((p, idx) => (
                <div
                  key={p.phase}
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#166534] text-white font-black flex items-center justify-center text-lg shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono font-semibold text-[#166534] uppercase tracking-wide">
                      {p.phase}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{p.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.modules.map((m) => (
                        <span key={m} className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-700">
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs font-bold text-[#166534] pt-2">
                      ✦ Outcome: {p.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Methodology */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
              How We Train
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1">
              Training Methodology That Actually Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY.map((m) => (
              <div key={m.title} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs">
                <h3 className="font-bold text-base text-gray-900 mb-2">{m.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Flexible Formats */}
        <section className="py-16 bg-[#fafaf9] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
                Program Options
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1">
                Flexible Training Formats for Colleges
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {FORMATS.map((f) => (
                <div key={f.title} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
                  <span className="px-2.5 py-1 bg-[#166534]/10 text-[#166534] font-bold text-xs rounded-md">
                    {f.hours}
                  </span>
                  <h4 className="font-bold text-sm text-gray-900 mt-3 mb-1">{f.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Partnership CTA */}
            <div className="relative overflow-hidden mt-14 max-w-3xl mx-auto bg-gradient-to-r from-[#166534] to-[#0f3f21] rounded-2xl p-8 text-white text-center shadow-xl">
              <BorderBeam
                colorFrom="#34d399"
                colorTo="#38bdf8"
                duration={6}
                size={120}
                borderWidth={1.5}
                radius={16}
              />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black">
                  Let&apos;s Build Placement-Ready Careers Together
                </h3>
                <p className="text-sm sm:text-base text-gray-200 mt-2 max-w-xl mx-auto">
                  We partner with college management and placement cells for structured semester and annual training drives.
                </p>
                <div className="mt-6">
                  <MagneticButton asChild strength={15}>
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-white text-[#166534] font-bold rounded-xl hover:bg-gray-100 transition-all inline-block shadow-md"
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
