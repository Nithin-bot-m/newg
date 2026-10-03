"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";

const FAQS = [
  {
    q: "Do I need to leave my current job to teach at Greenroots?",
    a: "Not at all. Most of our trainers teach evening or weekend batches, or record modules at their own pace, while staying in their full-time roles. The whole model is built around fitting in alongside what you already do.",
  },
  {
    q: "How much time does teaching take?",
    a: "It’s flexible. A live batch might be a few hours a week for the length of a cohort. Alternatively, you can record a set of modules once and keep earning as new students enrol — closer to passive income.",
  },
  {
    q: "How and when do I get paid?",
    a: "Depending on your engagement model — per live batch, per recorded module, or a revenue share — payouts are made on a regular cycle. The exact terms are agreed transparently during onboarding, before you ever teach.",
  },
  {
    q: "I’m a YouTuber / Instagram creator, not a corporate trainer. Is there a place for me?",
    a: "Yes — we have a dedicated track for educational and career creators. You can co-create courses, host live masterclasses, and grow your audience through our student community, turning your following into a recurring revenue stream.",
  },
  {
    q: "What do I need to handle outside of teaching?",
    a: "Everything outside the teaching itself — student acquisition, batch scheduling, marketing, the learning platform, and placement support — is handled by us. You show up and teach; we run the operation around you.",
  },
  {
    q: "How long until I start earning?",
    a: "Get onboarded, matched to the right course, and start earning within weeks. Our team reviews every application personally and reaches out within 48 hours if there’s a fit.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden scroll-mt-20">
      {/* Calm, quiet background texture */}
      <DotPattern
        color="#94a3b8"
        className="text-slate-300 opacity-40 pointer-events-none"
        width={24}
        height={24}
        cr={1}
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A] tracking-tight">
            Before You Apply
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Common questions trainers and content partners ask before joining Greenroots. Can&apos;t find what you&apos;re looking for?{" "}
            <a href="/contact" className="text-[#0878E8] font-semibold underline hover:text-[#0766c6] transition-colors">
              Contact us
            </a>
            .
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, i) => {
            const open = openIdx === i;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  open
                    ? "bg-blue-50/20 border-[#0878E8]/40 shadow-sm ring-1 ring-[#0878E8]/15"
                    : "bg-white border-gray-200/80 hover:border-gray-300 shadow-xs hover:shadow-sm"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4.5 text-left cursor-pointer"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${open ? "text-[#0878E8]" : "text-[#071D3A]"}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                      open ? "bg-[#0878E8] text-white shadow-xs" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {open && (
                  <div className="px-6 pb-6 text-sm sm:text-[15px] text-gray-600 leading-relaxed border-t border-[#0878E8]/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <a
            href="/contact"
            className="w-full sm:w-auto text-center px-7 py-3.5 border border-gray-300 text-[#071D3A] font-bold rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all shadow-xs"
          >
            See If You Qualify
          </a>
          <a
            href="/become-a-trainer"
            className="w-full sm:w-auto text-center px-7 py-3.5 bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0766c6] hover:to-[#00a3cc] shadow-lg shadow-[#0878E8]/25 hover:shadow-xl active:scale-[0.98] transition-all"
          >
            Apply to Join Us →
          </a>
        </div>
      </div>
    </section>
  );
}
