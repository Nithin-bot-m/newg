"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";

export default function ContactPage() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !course) {
      toast({
        title: "Required Fields Missing",
        description: "Please provide your name, phone number, and selected program.",
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
      setCourse("");
      setStatus("");
      setMsg("");
      toast({
        title: "Enquiry Submitted! 🎉",
        description: "Thank you! Our career counsellor will contact you within 4 hours with your personalised roadmap.",
      });
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Contact Hero */}
        <section className="bg-gradient-to-b from-[#f3f9f5] via-white to-white py-12 lg:py-16 border-b border-gray-100 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-4 py-1 text-xs font-semibold text-[#166534] mb-4 border border-[#166534]/20">
              <Phone className="h-3.5 w-3.5 text-amber-500" />
              <ShineText baseColor="#166534" shineColor="#15803d" duration={2}>
                Direct Support &amp; Walk-in Kukatpally Campus
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Let&apos;s Talk About <span className="text-[#166534]">Your Career.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Fill out the form or reach us directly. Our team will get back to you within a few hours with program details and next steps.
            </p>
          </div>
        </section>

        {/* Content Split: Details + Form */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Reach Out Directly
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                Whether you want to explore course fees, schedule an in-person career audit, or visit our Kukatpally academy — our door is always open.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-[#fbfdfa]">
                  <div className="h-10 w-10 rounded-lg bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-400">Phone</div>
                    <a href="tel:+919549543898" className="text-base font-bold text-gray-900 hover:text-[#166534]">
                      +91 95495 43898
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-[#fbfdfa]">
                  <div className="h-10 w-10 rounded-lg bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-400">Email</div>
                    <a href="mailto:greenroots.tech@outlook.com" className="text-base font-bold text-gray-900 hover:text-[#166534]">
                      greenroots.tech@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-[#fbfdfa]">
                  <div className="h-10 w-10 rounded-lg bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-400">Website</div>
                    <a href="https://grootstechnologies.com" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-900 hover:text-[#166534]">
                      grootstechnologies.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-[#fbfdfa]">
                  <div className="h-10 w-10 rounded-lg bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-400">Campus Address</div>
                    <div className="text-sm font-semibold text-gray-900 leading-snug">
                      Unit 206, Manjeera Majestic Commercial, Opposite JNTU, Next to Lulu Mall, Kukatpally, Hyderabad 500072
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-[#fbfdfa]">
                  <div className="h-10 w-10 rounded-lg bg-[#166534]/10 text-[#166534] flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold text-gray-400">Office Hours</div>
                    <div className="text-sm font-semibold text-gray-900">
                      Monday – Saturday · 9:00 AM – 7:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <MagneticButton asChild strength={14} className="w-full">
                  <a
                    href="https://wa.me/919549543898?text=Hi%20Greenroots!%20I%27d%20like%20to%20know%20more%20about%20your%20training%20programs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl shadow-md inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    WhatsApp Us Now (+91 95495 43898) →
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="relative overflow-hidden bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-lg">
              <BorderBeam
                colorFrom="#34d399"
                colorTo="#38bdf8"
                duration={6}
                size={120}
                borderWidth={1.5}
                radius={24}
              />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Send an Enquiry</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 mb-6">
                  We&apos;ll reply with a personalised program recommendation within 4 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Interested Course *</label>
                      <select
                        required
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                      >
                        <option value="">-- Select Program --</option>
                        <option>Power BI 60-Day Mastery</option>
                        <option>Senior Business Analyst Program</option>
                        <option>Full-Stack Software Testing</option>
                        <option>AI-Powered Product Management</option>
                        <option>Tricentis Tosca Automation</option>
                        <option>DevSecOps Mastery Track</option>
                        <option>Data Analytics for Freshers</option>
                        <option>Data Science &amp; AI (DSP Track)</option>
                        <option>Not sure — Need career guidance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Current Status</label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                      >
                        <option value="">-- Select Status --</option>
                        <option>Fresh Graduate</option>
                        <option>Working (0–2 years)</option>
                        <option>Working (2–5 years)</option>
                        <option>Working (5+ years)</option>
                        <option>Career Break / Returner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your background, career goals, or any specific questions..."
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-hidden focus:border-[#166534]"
                    />
                  </div>

                  <MagneticButton strength={10} className="w-full">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 px-6 bg-[#166534] hover:bg-[#14532d] text-white font-bold rounded-xl text-center transition-all shadow-md cursor-pointer"
                    >
                      {submitting ? "Submitting..." : "Submit Enquiry & Book Free Audit →"}
                    </button>
                  </MagneticButton>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
