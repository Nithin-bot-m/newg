"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Download, FileText, ShieldCheck, RefreshCw } from "lucide-react";
import { WordRotate } from "@/components/magicui/word-rotate";
import { useToast } from "@/hooks/use-toast";
import MagneticButton from "@/components/smoothui/magnetic-button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export function Hero() {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState<"details" | "otp" | "verified">("details");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("748291");
  const [countdown, setCountdown] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [verifying, setVerifying] = useState(false);

  // OTP resend timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (formStep === "otp" && countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else if (countdown === 0) {
      setCanResend(true);
    }
    return () => clearTimeout(timer);
  }, [formStep, countdown]);

  const handleRequestOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = phone.trim().replace(/\D/g, "");
    if (!name.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }
    if (cleanPhone.length < 10) {
      toast({
        title: "Valid Phone Required",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    // Generate 6-digit verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);

    setTimeout(() => {
      setSubmitting(false);
      setFormStep("otp");
      setCountdown(30);
      setCanResend(false);
      setOtp("");
      toast({
        title: "OTP Sent! 📩",
        description: `Verification code sent to +91 ${cleanPhone}. (Demo OTP: ${code})`,
      });
    }, 600);
  };

  const handleResendOtp = () => {
    const cleanPhone = phone.trim().replace(/\D/g, "");
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    setCountdown(30);
    setCanResend(false);
    setOtp("");
    toast({
      title: "New OTP Sent! 📩",
      description: `New code sent to +91 ${cleanPhone}. (Demo OTP: ${code})`,
    });
  };

  const triggerCurriculumDownload = () => {
    const link = document.createElement("a");
    link.href = "/curriculum/greenroots-curriculum-2026.pdf";
    link.download = `Greenroots-${program ? program.replace(/\s+/g, "-") : "Technology"}-Curriculum-2026.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVerifyOtp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (otp.length !== 6) {
      toast({
        title: "Incomplete Code",
        description: "Please enter the complete 6-digit verification code.",
        variant: "destructive",
      });
      return;
    }

    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      if (otp === generatedOtp || otp === "123456" || otp === "748291") {
        setFormStep("verified");
        toast({
          title: "Identity Verified! 🎉",
          description: "Curriculum download initiated. Thank you!",
        });
        triggerCurriculumDownload();
      } else {
        toast({
          title: "Invalid OTP",
          description: `The OTP entered does not match. Demo code: ${generatedOtp}`,
          variant: "destructive",
        });
      }
    }, 650);
  };

  return (
    <section id="hero" className="relative min-h-[70vh] lg:min-h-screen bg-[#062117] overflow-hidden flex items-center pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-24">
      {/* Calm, restrained ambient radial depth matching GROOTS brand green and orange */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.16),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(234,88,12,0.10),transparent_60%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:py-12 lg:py-16 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
          {/* Left: copy (7 cols) */}
          <div className="lg:col-span-7 text-white">
            <h1 className="text-[32px] sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.12] sm:leading-[1.08] tracking-tight text-white">
              Build a Career<br />
              <span className="bg-gradient-to-r from-[#34d399] via-[#86efac] to-[#FB923C] bg-clip-text text-transparent">
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
                  <span className="flex items-center justify-center h-5 w-5 rounded-full bg-[#166534]/30 text-[#4ade80] ring-1 ring-[#166534]/50 shrink-0 mt-0.5">
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
                className="text-[#FB923C] font-bold inline-flex"
              />
              <span className="block mt-1 text-slate-400 text-sm sm:text-base">who want a job, not just a degree.</span>
            </div>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
              <MagneticButton asChild strength={12}>
                <a
                  href="#courses"
                  className="w-full sm:w-auto min-h-[48px] justify-center px-7 py-3.5 bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white font-bold rounded-xl hover:from-[#c2410c] hover:to-[#ea580c] shadow-lg shadow-[#EA580C]/25 hover:shadow-xl active:scale-[0.98] transition-all inline-flex items-center gap-2 cursor-pointer group text-center"
                >
                  Explore 8 Programs
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </MagneticButton>
              <MagneticButton asChild strength={10}>
                <a
                  href="#contact"
                  className="w-full sm:w-auto min-h-[48px] text-center px-6 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 active:scale-[0.98] transition-all inline-flex items-center justify-center backdrop-blur-xs cursor-pointer"
                >
                  Talk to a Counsellor
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right: lead form with OTP verification (5 cols) */}
          <div className="lg:col-span-5 w-full max-w-md lg:max-w-none">
            <div className="relative bg-white rounded-3xl shadow-2xl p-5 sm:p-8 lg:p-9 border border-slate-200/90 transition-all duration-300">
              <div className="relative z-10">
                {formStep === "details" && (
                  <>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Free Curriculum PDF + Counselling
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-[#092B1D] tracking-tight">Talk to a Counsellor</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      Tell us where you want to land. Verify your phone number to get instant access to the official curriculum roadmap PDF.
                    </p>
                    <form onSubmit={handleRequestOtp} className="mt-6 space-y-4">
                      <div>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full Name *"
                          className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-base sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#166534]/15 focus:border-[#166534] text-slate-900 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <div className="relative flex items-center">
                          <span className="absolute left-4 text-sm font-semibold text-slate-400 select-none">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                            placeholder="Phone Number *"
                            className="w-full pl-13 pr-4 py-3 min-h-[46px] rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-base sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#166534]/15 focus:border-[#166534] text-slate-900 transition-all placeholder:text-slate-400"
                          />
                        </div>
                      </div>
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address (optional)"
                          className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-base sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#166534]/15 focus:border-[#166534] text-slate-900 transition-all placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <select
                          value={program}
                          onChange={(e) => setProgram(e.target.value)}
                          className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-base sm:text-sm text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#166534]/15 focus:border-[#166534] transition-all cursor-pointer"
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
                          className="w-full min-h-[48px] py-3.5 bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white font-bold rounded-xl hover:from-[#c2410c] hover:to-[#ea580c] shadow-lg shadow-[#EA580C]/25 hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-70 cursor-pointer flex items-center justify-center text-center gap-1.5"
                        >
                          {submitting ? "Sending OTP..." : "Verify Mobile & Download Curriculum →"}
                        </button>
                      </MagneticButton>
                      <p className="text-xs text-slate-500 text-center pt-1">
                        By submitting, you agree to our{" "}
                        <a href="/privacy" className="underline hover:text-slate-800 transition-colors">
                          Privacy Policy
                        </a>
                      </p>
                    </form>
                  </>
                )}

                {formStep === "otp" && (
                  <div className="animate-in fade-in duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                        Step 2 of 2 · Identity Verification
                      </span>
                      <button
                        type="button"
                        onClick={() => setFormStep("details")}
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back
                      </button>
                    </div>

                    <h3 className="text-2xl font-black text-[#092B1D] tracking-tight">Verify Your Mobile</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      Enter the 6-digit OTP sent to{" "}
                      <strong className="text-slate-900 font-semibold">+91 {phone}</strong>
                      <button
                        type="button"
                        onClick={() => setFormStep("details")}
                        className="text-xs font-bold text-[#166534] hover:underline ml-1.5 cursor-pointer"
                      >
                        Edit
                      </button>
                    </p>

                    {/* Quick Demo Helper Box */}
                    <div className="mt-4 p-3 bg-emerald-50/90 border border-emerald-200/70 rounded-xl flex items-center justify-between">
                      <div className="text-xs text-emerald-900">
                        <span>Test OTP: </span>
                        <span className="font-mono font-bold tracking-widest text-[#166534] text-sm ml-1">
                          {generatedOtp}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setOtp(generatedOtp)}
                        className="text-xs font-bold text-[#166534] hover:text-[#0f4d2a] bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs hover:bg-emerald-50 transition-all cursor-pointer"
                      >
                        Auto-fill OTP
                      </button>
                    </div>

                    <div className="mt-6 flex flex-col items-center">
                      <InputOTP
                        maxLength={6}
                        value={otp}
                        onChange={(value) => {
                          setOtp(value);
                          if (value.length === 6) {
                            setTimeout(() => {
                              if (value === generatedOtp || value === "123456" || value === "748291") {
                                setVerifying(true);
                                setTimeout(() => {
                                  setVerifying(false);
                                  setFormStep("verified");
                                  toast({
                                    title: "Identity Verified! 🎉",
                                    description: "Curriculum download ready.",
                                  });
                                  triggerCurriculumDownload();
                                }, 600);
                              }
                            }, 100);
                          }
                        }}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} className="h-12 w-10 sm:w-11 text-base sm:text-lg font-bold" />
                          <InputOTPSlot index={1} className="h-12 w-10 sm:w-11 text-base sm:text-lg font-bold" />
                          <InputOTPSlot index={2} className="h-12 w-10 sm:w-11 text-base sm:text-lg font-bold" />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} className="h-12 w-10 sm:w-11 text-base sm:text-lg font-bold" />
                          <InputOTPSlot index={4} className="h-12 w-10 sm:w-11 text-base sm:text-lg font-bold" />
                          <InputOTPSlot index={5} className="h-12 w-10 sm:w-11 text-base sm:text-lg font-bold" />
                        </InputOTPGroup>
                      </InputOTP>

                      <div className="mt-4 text-center">
                        {canResend ? (
                          <button
                            type="button"
                            onClick={handleResendOtp}
                            className="text-xs font-bold text-[#166534] hover:underline cursor-pointer"
                          >
                            Resend Verification Code
                          </button>
                        ) : (
                          <p className="text-xs text-slate-500">
                            Resend code in{" "}
                            <span className="font-semibold text-slate-700">{countdown}s</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-6">
                      <MagneticButton asChild strength={8} className="w-full">
                        <button
                          type="button"
                          onClick={() => handleVerifyOtp()}
                          disabled={otp.length !== 6 || verifying}
                          className="w-full min-h-[48px] py-3.5 bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white font-bold rounded-xl hover:from-[#c2410c] hover:to-[#ea580c] shadow-lg shadow-[#EA580C]/25 hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer flex items-center justify-center text-center gap-2"
                        >
                          {verifying ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin" /> Verifying...
                            </>
                          ) : (
                            <>Verify & Download Curriculum ↓</>
                          )}
                        </button>
                      </MagneticButton>
                    </div>
                  </div>
                )}

                {formStep === "verified" && (
                  <div className="animate-in fade-in zoom-in-95 duration-200 text-center py-2">
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-[#166534] mb-3 shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" /> Mobile Verified (+91 {phone})
                    </span>

                    <h3 className="text-2xl font-black text-[#092B1D] tracking-tight">Identity Verified!</h3>
                    <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                      Thank you, <strong className="text-slate-900">{name}</strong>. Your counselling slot for{" "}
                      <strong className="text-[#166534]">{program || "Hyderabad Tech Courses"}</strong> has been confirmed.
                    </p>

                    {/* PDF Card */}
                    <div className="mt-5 p-4 bg-slate-50/90 border border-slate-200/80 rounded-2xl flex items-center gap-3.5 text-left">
                      <div className="p-3 bg-emerald-500/10 text-[#166534] rounded-xl shrink-0">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-900 truncate">
                          Greenroots-Curriculum-2026.pdf
                        </p>
                        <p className="text-xs text-slate-500">
                          {program || "Complete 8-Track"} Syllabus & Placement Roadmap
                        </p>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 shrink-0">
                        Ready
                      </span>
                    </div>

                    {/* Direct Download Button */}
                    <div className="mt-5 space-y-3">
                      <a
                        href="/curriculum/greenroots-curriculum-2026.pdf"
                        download={`Greenroots-${program ? program.replace(/\s+/g, "-") : "Technology"}-Curriculum-2026.pdf`}
                        className="w-full min-h-[48px] py-3.5 bg-gradient-to-r from-[#166534] to-[#15803d] text-white font-bold rounded-xl shadow-lg shadow-[#166534]/25 hover:shadow-xl hover:from-[#14532d] hover:to-[#166534] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                      >
                        <Download className="w-4.5 h-4.5" /> Download Curriculum PDF Now
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setFormStep("details");
                          setName("");
                          setPhone("");
                          setEmail("");
                          setProgram("");
                          setOtp("");
                        }}
                        className="text-xs text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                )}
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
