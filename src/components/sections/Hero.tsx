"use client";

import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { SpotlightBackground } from "@/components/animmaster/spotlight-background";
import { GlitchText } from "@/components/animmaster/glitch-text";
import { CircularText } from "@/components/animmaster/circular-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { useToast } from "@/hooks/use-toast";
import ShineText from "@/components/smoothui/shine-text";
import BorderBeam from "@/components/smoothui/border-beam";
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
    <section id="hero" className="relative min-h-[75vh] lg:min-h-screen bg-gradient-to-b from-[#051429] via-[#071D3A] to-[#040E1C] overflow-hidden flex items-center pt-16 lg:pt-20">
      {/* Animmaster: Spotlight Background (replaces Aceternity Background Beams) */}
      <SpotlightBackground color="#00B8E6" intensity={0.45} />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#0878E8]/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-[30rem] w-[30rem] rounded-full bg-[#00AFA8]/25 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-[#00B8E6]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/20 px-4 py-1.5 text-xs font-semibold text-[#0878E8] mb-6 border border-[#0878E8]/30">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <ShineText baseColor="#93c5fd" shineColor="#ffffff" duration={2.2}>
                100% Career Audit Included · Hyderabad Tech Training
              </ShineText>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight text-white">
              Build a Career<br />
              <span className="bg-gradient-to-r from-[#34d399] via-[#38bdf8] to-[#60a5fa] bg-clip-text text-transparent">
                That Actually Works.
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Greenroots delivers job-ready technology training — from Power BI to DevSecOps — with a career audit, personalised counselling, and placement support. We match you to the right technology, build your skills from zero, and stand beside you until you land the role.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Career Audit First — assess your background, strengths, and market fit",
                "Industry-Mapped Curriculum benchmarked to TCS, Infosys, Accenture, Deloitte",
                "Fast Tracks: 2–3 Months intensive, outcome-focused programs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0878E8] shrink-0" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-2 text-base lg:text-lg text-gray-300">
              For{" "}
              <WordRotate
                words={["freshers", "working pros", "career switchers", "gap-year returns"]}
                duration={2200}
                className="text-[#0878E8] font-bold inline-flex"
              />
              <span className="block mt-2">who want a job, not just a degree.</span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#programs">
                <PulsatingButton
                  className="group inline-flex items-center gap-2 hover:bg-[#0766c6]"
                  pulseColor="rgba(8, 120, 232,   0.45)"
                  duration="2s"
                >
                  Explore 8 Programs
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </PulsatingButton>
              </a>
              <MagneticButton asChild strength={15}>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors inline-block"
                >
                  Talk to a Counsellor
                </a>
              </MagneticButton>

              {/* Animmaster: Circular Text rotating badge */}
              <div className="hidden sm:block ml-2">
                <CircularText
                  text="• INDUSTRY READY • PLACEMENT FOCUSED "
                  size={88}
                  fontSize={9}
                  duration={18}
                  color="#0878E8"
                >
                  <span className="text-[#32D583] text-xl font-black">★</span>
                </CircularText>
              </div>
            </div>
          </div>

          {/* Right: lead form */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 lg:p-8 overflow-hidden">
              <BorderBeam
                colorFrom="#0878E8"
                colorTo="#34d399"
                duration={5}
                size={110}
                borderWidth={1.5}
                radius={16}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#071D3A]">Talk to a Counsellor</h3>
                <p className="mt-2 text-sm text-gray-600">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8] focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number *"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8] focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address (optional)"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#0878E8] focus:border-transparent text-gray-900"
                    />
                  </div>
                  <div>
                    <select
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0878E8] focus:border-transparent"
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
                  <MagneticButton asChild strength={10} className="w-full">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white font-bold rounded-lg hover:from-[#0766c6] hover:to-[#00a3cc] shadow-lg shadow-[#0878E8]/25 transition-all disabled:opacity-70 cursor-pointer"
                    >
                      {submitting ? "Sending..." : "Get Free Counselling →"}
                    </button>
                  </MagneticButton>
                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our{" "}
                    <a href="#contact" className="underline hover:text-gray-700">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
