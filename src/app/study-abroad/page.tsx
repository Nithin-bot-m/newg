"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Globe, Plane, Award, Building, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";

const DESTINATIONS = [
  { flag: "🇺🇸", country: "USA", tag: "Top STEM Hub", desc: "Ivy League, Big Tech recruiting, OPT/STEM extension. Most graduate scholarships available." },
  { flag: "🇦🇺", country: "Australia", tag: "Top World Rankings", desc: "Multiple universities in the world's Top 100, 2–4 year post-study work visa, strong STEM pipeline." },
  { flag: "🇨🇦", country: "Canada", tag: "PR-Friendly", desc: "PGWP up to 3 years, transparent immigration, strong tech ecosystem in Toronto & Vancouver." },
  { flag: "🇬🇧", country: "UK", tag: "2-Yr Grad Visa", desc: "1-year masters, 2-year graduate visa, Russell Group prestige with controlled cost." },
  { flag: "🇩🇪", country: "Germany", tag: "Low / No Tuition", desc: "Public universities mostly tuition-free, Europe's engineering capital, 18-month job-search visa." },
  { flag: "🇮🇪", country: "Ireland", tag: "Tech Gateway", desc: "European HQ for Google, Meta, Apple. 2-year stay-back after masters, English-speaking." },
  { flag: "🇳🇿", country: "New Zealand", tag: "Quality of Life", desc: "Small intake, excellent placement ratios, 3-year post-study work visa." },
  { flag: "🇸🇬", country: "Singapore", tag: "Asia's Hub", desc: "NUS & NTU world-top-20, close to India, strong fintech / data science roles." },
];

const SERVICES = [
  { step: "01", title: "Free Counselling", desc: "One-hour deep-dive at our Manjeera Majestic office. We map your goals, budget, qualification fit, and shortlist 5-8 realistic targets." },
  { step: "02", title: "University Shortlisting", desc: "Ambitious / target / safe picks across countries and intakes, factoring in test scores, GPA, work experience, and budget." },
  { step: "03", title: "Application & Documents", desc: "SOPs, LORs, resume polish, transcripts, financial docs. We draft, you approve. No template-y AI-generated SOPs." },
  { step: "04", title: "Visa Guidance", desc: "F-1, Student route, Subclass 500 — country-specific paperwork prep, mock interviews, financial documentation. 96% visa success rate." },
  { step: "05", title: "Test Prep", desc: "IELTS, PTE, GRE, GMAT, TOEFL, SAT, Duolingo. Live classes, mock tests, diagnostic-led custom plans. Free starting diagnostic." },
  { step: "06", title: "Pre-Departure", desc: "Forex, accommodation, flight bookings, SIM cards, packing list, cultural orientation. The week before you fly, we handle the chaos." },
];

const TESTS = [
  { name: "IELTS", desc: "English Proficiency" },
  { name: "PTE", desc: "English Proficiency" },
  { name: "TOEFL", desc: "English Proficiency" },
  { name: "Duolingo", desc: "English Proficiency" },
  { name: "GRE", desc: "Graduate Entry" },
  { name: "GMAT", desc: "MBA Entry" },
  { name: "SAT", desc: "Undergrad Entry" },
  { name: "Free Diagnostic", desc: "Find your starting line" },
];

export default function StudyAbroadPage() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [qualification, setQualification] = useState("");
  const [intake, setIntake] = useState("");
  const [msg, setMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !country) {
      toast({
        title: "Required Fields Missing",
        description: "Please provide your name, phone number, and destination country.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setPhone("");
      setEmail("");
      setCountry("");
      setQualification("");
      setIntake("");
      setMsg("");
      toast({
        title: "Counselling Booked! ✈️",
        description: "Our study abroad advisor will reach out within 4 hours with your personalised university roadmap.",
      });
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f9f5] via-white to-white py-10 sm:py-14 lg:py-20 border-b border-slate-100 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(22,101,52,0.08),rgba(8,120,232,0.04)_60%,transparent_100%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-3.5 py-1 text-xs font-semibold text-[#166534] mb-4 border border-[#166534]/20 backdrop-blur-xs">
              <Globe className="h-3.5 w-3.5 text-amber-500" />
              <ShineText baseColor="#166534" shineColor="#15803d" duration={2}>
                Greenroots × SIG Global Edu — Official Partner
              </ShineText>
            </span>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Your Career. Your Country. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] via-[#15803d] to-[#0878E8]">Your Future.</span>
            </h1>
            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From IELTS to landing in Toronto — the Greenroots career audit + SIG&apos;s 20+ years of overseas education expertise, all under one roof in Hyderabad.
            </p>

            {/* Quick Stats */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-xs p-3.5 sm:p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-black text-[#166534]">20yr+</div>
                <div className="text-xs text-slate-500 mt-0.5 sm:mt-1 font-medium">Experience</div>
              </div>
              <div className="bg-white/90 backdrop-blur-xs p-3.5 sm:p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-black text-[#166534]">40K+</div>
                <div className="text-xs text-slate-500 mt-0.5 sm:mt-1 font-medium">Students Placed</div>
              </div>
              <div className="bg-white/90 backdrop-blur-xs p-3.5 sm:p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-black text-[#166534]">500+</div>
                <div className="text-xs text-slate-500 mt-0.5 sm:mt-1 font-medium">Universities</div>
              </div>
              <div className="bg-white/90 backdrop-blur-xs p-3.5 sm:p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                <div className="text-xl sm:text-2xl font-black text-[#166534]">35+</div>
                <div className="text-xs text-slate-500 mt-0.5 sm:mt-1 font-medium">Branches</div>
              </div>
              <div className="bg-white/90 backdrop-blur-xs p-3.5 sm:p-4.5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300 col-span-2 md:col-span-1">
                <div className="text-xl sm:text-2xl font-black text-[#166534]">6</div>
                <div className="text-xs text-slate-500 mt-0.5 sm:mt-1 font-medium">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Strip */}
        <div className="py-4 bg-gradient-to-r from-[#071D3A] via-[#166534] to-[#071D3A] text-white text-xs sm:text-sm font-semibold border-y border-white/10 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <span className="flex items-center gap-1.5"><span>✓</span> Free Counselling</span>
            <span className="flex items-center gap-1.5"><span>✓</span> Visa Guidance (96% Success)</span>
            <span className="flex items-center gap-1.5"><span>✓</span> 500+ Partner Universities</span>
            <span className="flex items-center gap-1.5"><span>✓</span> IELTS / GRE / GMAT / PTE</span>
            <span className="flex items-center gap-1.5"><span>✓</span> End-to-End Support</span>
          </div>
        </div>

        {/* Partnership Showcase */}
        <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-gradient-to-b from-[#fafaf9] to-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm">
            <div>
              <span className="text-xs uppercase font-bold text-[#166534] tracking-wider">
                Our Education Partner
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 tracking-tight">
                SIG Global Edu — India&apos;s Most Trusted Overseas Education Partner
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded by Australian and American graduates &amp; citizens, with 35+ branches across India and a track record of 40,000+ student placements at 500+ authorised universities globally.
              </p>
              <div className="mt-6 space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-[#166534] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Same building neighbours:</strong> Greenroots at Unit 206 and SIG at Unit 204 in Manjeera Majestic Commercial, JNTU Road.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-[#166534] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>One continuous journey:</strong> Career audit at Greenroots → test prep, university shortlisting and visa filing with SIG.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="h-5 w-5 rounded-full bg-emerald-50 ring-1 ring-emerald-200 text-[#166534] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Vetted and accountable:</strong> Authorised by 500+ global institutions with transparent documentation.</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-white p-5 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md">
              <BorderBeam
                colorFrom="#34d399"
                colorTo="#38bdf8"
                duration={6}
                size={120}
                borderWidth={1.5}
                radius={24}
              />
              <div className="relative z-10">
                <h3 className="font-bold text-lg text-gray-900 mb-3.5 sm:mb-4 tracking-tight">Book Free Overseas Counselling</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full min-h-[46px] px-3 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    >
                      <option value="">Destination *</option>
                      <option>USA</option>
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>Ireland</option>
                      <option>New Zealand</option>
                      <option>Singapore</option>
                    </select>
                    <select
                      value={intake}
                      onChange={(e) => setIntake(e.target.value)}
                      className="w-full min-h-[46px] px-3 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    >
                      <option value="">Target Intake</option>
                      <option>Fall 2026</option>
                      <option>Spring 2027</option>
                      <option>Fall 2027</option>
                      <option>Spring 2028</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Questions or preferences (optional)"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                  />
                  <MagneticButton asChild strength={10} className="w-full">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full min-h-[48px] py-3 bg-gradient-to-r from-[#166534] to-[#15803d] hover:from-[#14532d] hover:to-[#166534] text-white font-bold rounded-xl text-sm transition-all cursor-pointer shadow-md shadow-emerald-950/20 hover:shadow-lg hover:shadow-emerald-900/30 flex items-center justify-center text-center"
                    >
                      {submitting ? "Booking..." : "Get Free Counselling →"}
                    </button>
                  </MagneticButton>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* 8 Destinations */}
        <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
              Destinations
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
              Where Do You Want to Land?
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
              Eight popular destinations our students choose. Tell us which and we&apos;ll map your fit, budget, and timeline.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((d) => (
              <TiltCard
                key={d.country}
                maxTilt={6}
                scale={1.02}
                glare={true}
                glareOpacity={0.08}
                className="h-full rounded-2xl"
              >
                <div className="h-full bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="text-3xl mb-3">{d.flag}</div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold text-lg text-gray-900">{d.country}</h3>
                      <span className="px-2.5 py-1 bg-emerald-50 text-[#166534] border border-emerald-200/60 text-[11px] font-bold rounded-lg">
                        {d.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* 6 Services */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-[#fafaf9] to-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
                End-to-End Support
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
                From First Question to Your Boarding Pass
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div key={s.title} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#166534] px-2.5 py-1 bg-emerald-50 border border-emerald-200/60 rounded-lg inline-block">{s.step} / 06</span>
                    <h3 className="font-bold text-base text-gray-900 mt-3 mb-1.5">{s.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Test Prep Grid */}
            <div className="mt-14 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-6 tracking-tight">Test Preparation We Cover</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {TESTS.map((t) => (
                  <div key={t.name} className="p-3.5 bg-slate-50/70 hover:bg-emerald-50/50 rounded-xl border border-slate-200/80 hover:border-emerald-300/60 transition-all duration-200">
                    <div className="font-bold text-sm text-[#166534]">{t.name}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{t.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
