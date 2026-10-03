"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useToast } from "@/hooks/use-toast";
import MagneticButton from "@/components/smoothui/magnetic-button";

export function Hero() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please provide at least your full name and phone number.",
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
      setProgram("");
      toast({
        title: "Counselling Slot Requested! 🎉",
        description: "Our career counsellor will call you within 4 hours with your personalised roadmap.",
      });
    }, 600);
  };

  return (
    <section id="hero" className="relative min-h-[75vh] lg:min-h-screen bg-[#071D3A] overflow-hidden flex items-center pt-20 lg:pt-24 pb-16 lg:pb-24">
      {/* Calm, restrained ambient radial depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(8,120,232,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(0,184,230,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: copy (7 cols) */}
          <div className="lg:col-span-7 text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/15 px-3.5 py-1.5 text-xs font-semibold text-[#38bdf8] mb-6 border border-[#0878E8]/30">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>100% Career Audit Included · Hyderabad Tech Training</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight text-white">
              Build a Career<br />
              <span className="bg-gradient-to-r from-[#34d399] via-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent">
                That Actually Works.
              </span>
            </h1>

            <p className="mt-6 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Greenroots delivers job-ready technology training — from Power BI to DevSecOps — with a career audit, personalised counselling, and placement support. We match you to the right technology, build your skills from zero, and stand beside you until you land the role.
            </p>

            <div className="mt-6 space-y-3.5">
              {[
                "Career Audit First — assess your background, strengths, and market fit",
                "Industry-Mapped Curriculum benchmarked to TCS, Infosys, Accenture, Deloitte",
                "Fast Tracks: 2–3 Months intensive, outcome-focused programs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-[#0878E8]/20 text-[#38bdf8] ring-1 ring-[#0878E8]/40 shrink-0 mt-0.5">
                    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 text-base lg:text-lg text-slate-300">
              For{" "}
              <WordRotate
                words={["freshers", "working pros", "career switchers", "gap-year returns"]}
                duration={2200}
                className="text-[#38bdf8] font-bold inline-flex"
              />
              <span className="block mt-1 text-slate-400 text-sm sm:text-base">who want a job, not just a degree.</span>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <MagneticButton asChild strength={12}>
                <a
                  href="#courses"
                  className="px-7 py-3.5 bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0766c6] hover:to-[#00a3cc] shadow-lg shadow-[#0878E8]/25 hover:shadow-xl active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer group"
                >
                  Explore 8 Programs
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </MagneticButton>
              <MagneticButton asChild strength={10}>
                <a
                  href="#contact"
                  className="px-6 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 active:scale-[0.98] transition-all inline-block backdrop-blur-xs cursor-pointer"
                >
                  Talk to a Counsellor
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right: lead form (5 cols) */}
          <div className="lg:col-span-5 w-full max-w-md lg:max-w-none">
            <div className="relative bg-white rounded-3xl shadow-2xl p-7 sm:p-9 border border-slate-200/90">
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-[#071D3A] tracking-tight">Talk to a Counsellor</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Tell us where you want to land. We reply within 4 hours with a personalised counselling slot, recommended tests, and a rough budget map.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name *"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-sm focus:outline-none focus:ring-4 focus:ring-[#0878E8]/10 focus:border-[#0878E8] text-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number *"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-sm focus:outline-none focus:ring-4 focus:ring-[#0878E8]/10 focus:border-[#0878E8] text-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address (optional)"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-sm focus:outline-none focus:ring-4 focus:ring-[#0878E8]/10 focus:border-[#0878E8] text-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <select
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-sm text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#0878E8]/10 focus:border-[#0878E8] transition-all cursor-pointer"
                    >
                      <option value="">Select Program</option>
                      <option value="Power BI Mastery">Power BI Mastery</option>
                      <option value="Business Analyst">Business Analyst</option>
                      <option value="DevSecOps">DevSecOps</option>
                      <option value="Software Testing">Software Testing</option>
                      <option value="Data Analytics">Data Analytics</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Tosca Automation">Tosca Automation</option>
                      <option value="AI Product Mgmt">AI Product Mgmt</option>
                    </select>
                  </div>
                  <MagneticButton asChild strength={8} className="w-full">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0766c6] hover:to-[#00a3cc] shadow-lg shadow-[#0878E8]/25 hover:shadow-xl hover:shadow-[#0878E8]/30 active:scale-[0.98] transition-all disabled:opacity-70 cursor-pointer"
                    >
                      {submitting ? "Sending..." : "Get Free Counselling →"}
                    </button>
                  </MagneticButton>
                  <p className="text-xs text-slate-500 text-center">
                    By submitting, you agree to our{" "}
                    <a href="/privacy" className="underline hover:text-slate-800 transition-colors">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deliberate transition gradient from Hero into LogoStrip */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}
