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
        <section className="bg-gradient-to-b from-[#f3f9f5] via-white to-white py-12 lg:py-16 border-b border-gray-100 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-4 py-1 text-xs font-semibold text-[#166534] mb-4 border border-[#166534]/20">
              <Globe className="h-3.5 w-3.5 text-amber-500" />
              <ShineText baseColor="#166534" shineColor="#15803d" duration={2}>
                Greenroots × SIG Global Edu — Official Partner
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Your Career. Your Country. <span className="text-[#166534]">Your Future.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              From IELTS to landing in Toronto — the Greenroots career audit + SIG&apos;s 20+ years of overseas education expertise, all under one roof in Hyderabad.
            </p>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl font-black text-[#166534]">20yr+</div>
                <div className="text-xs text-gray-500 mt-1">Experience</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl font-black text-[#166534]">40K+</div>
                <div className="text-xs text-gray-500 mt-1">Students Placed</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl font-black text-[#166534]">500+</div>
                <div className="text-xs text-gray-500 mt-1">Universities</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="text-2xl font-black text-[#166534]">35+</div>
                <div className="text-xs text-gray-500 mt-1">Branches</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200 col-span-2 md:col-span-1">
                <div className="text-2xl font-black text-[#166534]">6</div>
                <div className="text-xs text-gray-500 mt-1">Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Strip */}
        <div className="py-4 bg-[#166534] text-white text-xs sm:text-sm font-semibold">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <span>✓ Free Counselling</span>
            <span>✓ Visa Guidance (96% Success)</span>
            <span>✓ 500+ Partner Universities</span>
            <span>✓ IELTS / GRE / GMAT / PTE</span>
            <span>✓ End-to-End Support</span>
          </div>
        </div>

        {/* Partnership Showcase */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#fafaf9] p-8 sm:p-12 rounded-3xl border border-gray-200">
            <div>
              <span className="text-xs uppercase font-bold text-[#166534] tracking-wider">
                Our Education Partner
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
                SIG Global Edu — India&apos;s Most Trusted Overseas Education Partner
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Founded by Australian and American graduates &amp; citizens, with 35+ branches across India and a track record of 40,000+ student placements at 500+ authorised universities globally.
              </p>
              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <span className="h-5 w-5 rounded-full bg-[#166534]/10 text-[#166534] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Same building neighbours:</strong> Greenroots at Unit 206 and SIG at Unit 204 in Manjeera Majestic Commercial, JNTU Road.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="h-5 w-5 rounded-full bg-[#166534]/10 text-[#166534] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>One continuous journey:</strong> Career audit at Greenroots → test prep, university shortlisting and visa filing with SIG.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="h-5 w-5 rounded-full bg-[#166534]/10 text-[#166534] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                  <span><strong>Vetted and accountable:</strong> Authorised by 500+ global institutions with transparent documentation.</span>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
              <BorderBeam
                colorFrom="#34d399"
                colorTo="#38bdf8"
                duration={6}
                size={110}
                borderWidth={1.5}
                radius={16}
              />
              <div className="relative z-10">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Book Free Overseas Counselling</h3>
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <select
                      required
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
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
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
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
                    className="w-full px-3.5 py-2 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                  />
                  <MagneticButton asChild strength={10} className="w-full">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-2.5 bg-[#166534] hover:bg-[#14532d] text-white font-bold rounded-xl text-sm transition-all cursor-pointer shadow-xs"
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
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
              Destinations
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1">
              Where Do You Want to Land?
            </h2>
            <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
              Eight popular destinations our students choose. Tell us which and we&apos;ll map your fit, budget, and timeline.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((d) => (
              <TiltCard
                key={d.country}
                maxTilt={8}
                scale={1.02}
                glare={true}
                glareOpacity={0.12}
                className="h-full rounded-2xl"
              >
                <div className="h-full bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between">
                  <div>
                    <div className="text-3xl mb-2">{d.flag}</div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold text-lg text-gray-900">{d.country}</h3>
                      <span className="px-2 py-0.5 bg-[#166534]/10 text-[#166534] text-[11px] font-bold rounded-md">
                        {d.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* 6 Services */}
        <section className="py-16 bg-[#fafaf9] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
                End-to-End Support
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1">
                From First Question to Your Boarding Pass
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div key={s.title} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-2xs">
                  <span className="text-xs font-mono font-bold text-[#166534]">{s.step} / 06</span>
                  <h3 className="font-bold text-base text-gray-900 mt-2 mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Test Prep Grid */}
            <div className="mt-14 bg-white p-8 rounded-2xl border border-gray-200 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Test Preparation We Cover</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {TESTS.map((t) => (
                  <div key={t.name} className="p-3 bg-[#fbfdfa] rounded-xl border border-gray-200">
                    <div className="font-bold text-sm text-[#166534]">{t.name}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{t.desc}</div>
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
