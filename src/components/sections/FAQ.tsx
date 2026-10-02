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
    <section id="faq" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      {/* Magic UI: Dot Pattern ambient background */}
      <DotPattern
        glow
        color="#FC6C18"
        className="text-[#FC6C18]/15"
        width={24}
        height={24}
        cr={1.2}
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a]">
            Before You Apply
          </h2>
          <p className="mt-4 text-gray-600">
            Common questions trainers and content partners ask before joining Greenroots. Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#" className="text-[#0a0a0a] underline">
              Contact us
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const open = openIdx === i;
            return (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#0a0a0a]">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center transition-colors ${
                      open ? "bg-[#FC6C18] text-white" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {open && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="px-6 py-3 border border-gray-300 text-[#0a0a0a] font-semibold rounded-lg hover:bg-gray-50 transition-colors">
            See If You Qualify
          </button>
          <button className="px-6 py-3 bg-[#FC6C18] text-white font-semibold rounded-lg hover:bg-[#e55a0a] transition-colors">
            Apply to Join Us →
          </button>
        </div>
      </div>
    </section>
  );
}
