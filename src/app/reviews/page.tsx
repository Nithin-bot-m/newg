"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Star, CheckCircle, ArrowRight, Building, Award } from "lucide-react";
import Link from "next/link";
import InfiniteSlider from "@/components/smoothui/infinite-slider";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";

const REVIEWS = [
  {
    name: "Priya K.",
    track: "Power BI Track Graduate",
    company: "Deloitte",
    rating: 5,
    quote:
      "The Power BI track was exactly what I needed. Rushi's training style is very practical — we worked on real dashboards from week one. Got placed at Deloitte within 2 months of completing the program.",
  },
  {
    name: "Arun R.",
    track: "Business Analyst Track Graduate",
    company: "Infosys",
    rating: 5,
    quote:
      "I came in as a fresher with zero IT knowledge. The career audit helped me find the BA path and the training was incredibly structured. Cleared my first interview at Infosys in the third month.",
  },
  {
    name: "Santhosh M.",
    track: "DevSecOps Track Graduate",
    company: "Capgemini",
    rating: 4,
    quote:
      "DevSecOps is a niche skill and Greenroots covers it in incredible depth. Docker, Kubernetes, Terraform — all covered with live cloud labs. The content is premium and the support doesn't stop after training.",
  },
  {
    name: "Nandini K.",
    track: "Data Analytics Graduate",
    company: "Wipro",
    rating: 5,
    quote:
      "After 2 years of a gap, I was nervous to re-enter IT. Greenroots made it stress-free — the resume rebuild and LinkedIn profile update alone got me 4 interview calls in the first week after posting.",
  },
  {
    name: "Venkat R.",
    track: "Tosca Automation Graduate",
    company: "TCS",
    rating: 5,
    quote:
      "Tosca training here is unlike anything on YouTube. They use actual enterprise project structures, not toy examples. The mock interviews were harder than the real ones — which is exactly what you need.",
  },
  {
    name: "Zaid F.",
    track: "AI Product Management Graduate",
    company: "Associate PM Offer",
    rating: 5,
    quote:
      "The AI Product Management track is genuinely ahead of the market. I got an offer as an Associate PM within 3 weeks of finishing — and the interviewers were impressed by the AI tool fluency they hadn't seen before.",
  },
];

const COMPANIES = [
  "TCS",
  "Infosys",
  "Accenture",
  "Wipro",
  "Cognizant",
  "Capgemini",
  "Deloitte",
  "HCL Technologies",
  "Tech Mahindra",
  "LTIMindtree",
  "Mphasis",
  "Hexaware",
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Career Audit",
    desc: "We map your background to the right program and market segment.",
  },
  {
    step: "2",
    title: "Intensive Training",
    desc: "2–3 month track with live labs, projects, and mentor access.",
  },
  {
    step: "3",
    title: "Resume & Profile",
    desc: "ATS resume, LinkedIn, and Naukri profile — built by our team.",
  },
  {
    step: "4",
    title: "Mock Interviews",
    desc: "Daily mock rounds with feedback until you're interview-ready.",
  },
  {
    step: "5",
    title: "Placement Drive",
    desc: "Referrals, recruiter connects, and active job drive support.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Header Hero */}
        <section className="bg-gradient-to-b from-[#f3f9f5] to-white py-12 lg:py-16 border-b border-gray-100 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-4 py-1 text-xs font-semibold text-[#166534] mb-4 border border-[#166534]/20">
              <Award className="h-3.5 w-3.5 text-amber-500" />
              <ShineText baseColor="#166534" shineColor="#15803d" duration={2.2}>
                Proven Placement Track Record · Hyderabad Hub
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Our Placement Track Record & Student Reviews
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Real students. Real companies. Real salaries. Here&apos;s what Greenroots has delivered.
            </p>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-[#166534]">85%</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Placement Rate</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-[#166534]">₹4.5L</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Avg. Fresher Package</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-[#166534]">60+</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Alumni Placed</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-[#166534]">3 mo</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">Avg. Time to Offer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Companies with SmoothUI InfiniteSlider */}
        <section className="py-10 border-b border-gray-100 bg-[#fafaf9] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
            <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400">
              Hiring Our Alumni
            </h3>
          </div>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <InfiniteSlider speed={35} speedOnHover={15} gap={16}>
              {COMPANIES.map((company) => (
                <span
                  key={company}
                  className="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-sm font-semibold text-gray-800 shadow-xs hover:border-[#166534] transition-colors shrink-0 inline-flex items-center"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-[#166534] mr-2"></span>
                  {company}
                </span>
              ))}
            </InfiniteSlider>
          </div>
        </section>

        {/* 5-Step Process */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1">
              From Enrolment to Offer Letter
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#166534]/50 transition-all shadow-xs flex flex-col"
              >
                <div className="h-8 w-8 rounded-full bg-[#166534] text-white font-bold flex items-center justify-center text-sm mb-3">
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1">{step.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 bg-[#fbfdfa] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest font-bold text-[#166534]">
                Student Voices
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mt-1">
                What Our Graduates Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REVIEWS.map((review, idx) => (
                <TiltCard
                  key={review.name}
                  maxTilt={6}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.12}
                  className="h-full rounded-2xl"
                >
                  <div className="relative h-full bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden">
                    {idx === 0 && (
                      <BorderBeam
                        colorFrom="#166534"
                        colorTo="#38bdf8"
                        duration={6}
                        size={90}
                        borderWidth={1.5}
                        radius={16}
                      />
                    )}
                    <div>
                      <div className="flex gap-1 text-amber-400 mb-3">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed italic">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#166534] text-white font-bold flex items-center justify-center text-sm shrink-0">
                        {review.name.slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-gray-900">{review.name}</div>
                        <div className="text-xs text-gray-500">{review.track}</div>
                        <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#166534] mt-0.5">
                          <CheckCircle className="h-3 w-3" /> Placed at {review.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-14 text-center">
              <MagneticButton asChild strength={15}>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-[#166534] hover:bg-[#14532d] text-white font-bold rounded-xl shadow-md inline-flex items-center gap-2 transition-all"
                >
                  Start Your Career Transformation →
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
