"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Briefcase, Youtube, Instagram, Clock, DollarSign, Users, Award, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";

const PROFILES = [
  {
    icon: Briefcase,
    title: "IT & Non-IT Professionals",
    desc: "Domain experts with real-world experience ready to pass on what they've learned in the field.",
    qualify: [
      "5+ years in any IT or Non-IT domain",
      "Expertise in Cloud, DevOps, Data, BA, Testing, HR, Finance, Soft Skills, or Aptitude",
      "Passion for teaching and mentoring the next generation",
      "Currently employed or freelancing — no need to quit your current job",
    ],
  },
  {
    icon: Youtube,
    title: "YouTubers — Educational & Career",
    desc: "Content creators who teach, inspire, and build audiences around technology, careers, or education.",
    qualify: [
      "Run a YouTube channel on tech, careers, aptitude, or education",
      "Want to monetise your content beyond AdSense",
      "Ready to co-create structured courses with us",
      "Want to grow your subscriber base through our student community",
    ],
  },
  {
    icon: Instagram,
    title: "Instagram Influencers — EdTech & Career",
    desc: "Voices shaping how students think about careers, skills, and the future of work.",
    qualify: [
      "Create technology, career growth, or education reels and content",
      "Engage students with placement tips and professional guidance",
      "Want to turn your following into a dependable revenue stream",
      "Ready to co-host sessions, masterclasses, and student webinars",
    ],
  },
];

const FAQS = [
  {
    q: "Do I need to quit my current job?",
    a: "Not at all. Most of our trainers teach evening or weekend batches, or record modules at their own pace, while staying in their full-time roles. The whole model is built around fitting in alongside what you already do.",
  },
  {
    q: "Do I need prior teaching experience?",
    a: "No. What matters is genuine, hands-on expertise and a willingness to mentor. Our team helps you structure your knowledge into a clear curriculum, so you can focus on teaching what you know best.",
  },
  {
    q: "How much time does it actually take?",
    a: "It's flexible. A live batch might be a few hours a week for the length of a cohort. Alternatively, you can record a set of modules once and keep earning as new students enrol — closer to passive income.",
  },
  {
    q: "How and when do I get paid?",
    a: "Depending on your engagement model — per live batch, per recorded module, or a revenue share — payouts are made on a regular cycle. The exact terms are agreed transparently during onboarding, before you start.",
  },
  {
    q: "I'm a YouTuber or Instagram creator, not a corporate trainer. Can I still join?",
    a: "Yes — we have a dedicated track for educational and career creators. You can co-create courses, host live masterclasses, and grow your audience through our student community, turning your following into a real revenue stream.",
  },
  {
    q: "What support do I get from Greenroots?",
    a: "Everything outside the teaching itself — student acquisition, batch scheduling, marketing, the learning platform, and placement support — is handled by us. You show up and teach; we run the operation around you.",
  },
];

export default function BecomeATrainerPage() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [exp, setExp] = useState("");
  const [domain, setDomain] = useState("");
  const [social, setSocial] = useState("");
  const [msg, setMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !profile || !domain.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill out all marked fields to submit your trainer application.",
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
      setProfile("");
      setExp("");
      setDomain("");
      setSocial("");
      setMsg("");
      toast({
        title: "Application Submitted! 🎉",
        description: "Thank you for applying! Our onboarding team will reach out within 48 hours for a discovery call.",
      });
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f3f9f5] via-white to-white py-14 lg:py-20 border-b border-slate-100 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(22,101,52,0.08),rgba(8,120,232,0.04)_60%,transparent_100%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-4 py-1.5 text-xs font-semibold text-[#166534] mb-4 border border-[#166534]/20 backdrop-blur-xs">
              <Award className="h-3.5 w-3.5 text-amber-500" />
              <ShineText baseColor="#166534" shineColor="#15803d" duration={2}>
                Now Inviting Trainers &amp; Creators · High-Yield Partnership
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Teach. Grow. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#166534] via-[#15803d] to-[#0878E8]">Earn More.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              You have the expertise. We have the students, the platform, and the placement outcomes. Join Greenroots as a trainer or content partner — and double or triple your income without leaving what you already do.
            </p>

            {/* Quick Stats */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black text-[#166534]">5yr+</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Minimum Experience</div>
              </div>
              <div className="bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black text-[#166534]">2–3×</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Income Potential</div>
              </div>
              <div className="bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black text-[#166534]">IT &amp; Non-IT</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Both Welcome</div>
              </div>
              <div className="bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black text-[#166534]">Flexible</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">Teach Live or Record</div>
              </div>
            </div>
          </div>
        </section>

        {/* Profiles */}
        <section className="py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
              Who We&apos;re Looking For
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
              3 Profiles We Want on Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROFILES.map((p) => {
              const Icon = p.icon;
              return (
                <TiltCard
                  key={p.title}
                  maxTilt={6}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.08}
                  className="h-full rounded-2xl"
                >
                  <div className="h-full bg-white rounded-2xl border border-slate-200/80 p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-emerald-50 text-[#166534] ring-1 ring-emerald-200/70 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">{p.desc}</p>

                      <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-3">
                        You Qualify If You Have
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                        {p.qualify.map((q, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#166534] mt-2 shrink-0" />
                            <span className="leading-snug">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>

        {/* Income Potential Breakdown */}
        <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-br from-[#071D3A] via-[#0b294f] to-[#166534] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent_100%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-300">
                Income Potential
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 tracking-tight">
                Double. Triple. Your Income.
              </h2>
              <p className="text-slate-200 text-sm mt-2 max-w-xl mx-auto leading-relaxed">
                Here&apos;s what realistic earning looks like when your expertise meets Greenroots&apos; student base.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-300">
                <div className="text-sm font-bold text-amber-300">IT Professional</div>
                <div className="text-xs text-slate-300 mt-1">Current salary ~₹60,000/mo</div>
                <div className="text-xl font-bold my-2 text-white">+</div>
                <div className="text-xs text-slate-300">Greenroots: ₹30,000–50,000/mo</div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-3xl font-black text-white">₹1L+</div>
                  <div className="text-xs text-slate-200 mt-1">1.5× to 2× income · Part-time teaching</div>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-md p-6 sm:p-7 rounded-2xl border-2 border-amber-300 relative shadow-2xl">
                <span className="absolute -top-3 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Featured
                </span>
                <div className="text-sm font-bold text-amber-300">Senior Expert (10yr+)</div>
                <div className="text-xs text-slate-300 mt-1">Current CTC ~₹1.2L/mo</div>
                <div className="text-xl font-bold my-2 text-white">+</div>
                <div className="text-xs text-slate-300">Greenroots: ₹60,000–1L/mo</div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-3xl font-black text-amber-300">₹2L+</div>
                  <div className="text-xs text-slate-200 mt-1">2× to 3× income · Weekend batches only</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/15 hover:border-white/30 transition-all duration-300">
                <div className="text-sm font-bold text-amber-300">YouTuber / Influencer</div>
                <div className="text-xs text-slate-300 mt-1">Current creator income ~₹20,000/mo</div>
                <div className="text-xl font-bold my-2 text-white">+</div>
                <div className="text-xs text-slate-300">Greenroots: ₹40,000–80,000/mo</div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-3xl font-black text-white">₹1L+</div>
                  <div className="text-xs text-slate-200 mt-1">3× to 5× income · Leverage your audience</div>
                </div>
              </div>
            </div>

            <p className="text-center text-[11px] text-slate-300 mt-8">
              * Figures are illustrative. Actual earnings vary based on batch size, subject demand, and engagement model.
            </p>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
              Join the Team
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
              Apply to Become a Trainer
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              All fields marked * are required. We respond within 48 hours.
            </p>
          </div>

          <div className="relative overflow-hidden bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg">
            <BorderBeam
              colorFrom="#34d399"
              colorTo="#38bdf8"
              duration={6}
              size={130}
              borderWidth={1.5}
              radius={24}
            />
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">I Am A *</label>
                  <select
                    required
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                  >
                    <option value="">-- Select Profile --</option>
                    <option>IT Professional</option>
                    <option>Non-IT Professional</option>
                    <option>YouTuber / Content Creator</option>
                    <option>Instagram Influencer</option>
                    <option>Freelance Trainer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Years of Experience</label>
                  <select
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                  >
                    <option value="">-- Select Experience --</option>
                    <option>5–7 years</option>
                    <option>8–10 years</option>
                    <option>10–15 years</option>
                    <option>15+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Domain / Area of Expertise *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Power BI, DevSecOps, QA, HR, Aptitude, Soft Skills..."
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">LinkedIn / YouTube / Instagram Handle</label>
                <input
                  type="text"
                  placeholder="Paste your profile URL or handle"
                  value={social}
                  onChange={(e) => setSocial(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tell Us About Yourself</label>
                <textarea
                  rows={3}
                  placeholder="Your background, what you teach, what you're looking for in a partnership..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/50 focus:bg-white focus:outline-hidden focus:border-[#166534] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                />
              </div>

              <MagneticButton asChild strength={10} className="w-full">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#166534] to-[#15803d] hover:from-[#14532d] hover:to-[#166534] text-white font-bold rounded-xl text-center transition-all shadow-md shadow-emerald-950/20 hover:shadow-lg hover:shadow-emerald-900/30 cursor-pointer"
                >
                  {submitting ? "Submitting..." : "Submit Application →"}
                </button>
              </MagneticButton>
            </form>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-[#fbfdfa] to-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300/60 transition-all duration-300 group">
                  <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown className="h-4 w-4 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
