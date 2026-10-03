import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy · Greenroots Training & Placements",
  description: "Privacy Policy for Greenroots Technology Training Institute under the Digital Personal Data Protection Act, 2023 (DPDP) of India.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-24 lg:pt-28 pb-20 bg-gradient-to-b from-[#f3f9f5] via-slate-50/50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full bg-white border border-slate-200/80 text-[#166534] hover:bg-emerald-50 hover:border-emerald-300 transition-all shadow-2xs mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Greenroots
          </Link>

          <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm font-mono text-slate-500 mt-2 mb-8 pb-6 border-b border-slate-100">
              Last updated: 22 May 2026
            </p>

            <div className="prose prose-emerald max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed">
              <p>
                This policy explains what personal information Greenroots Technology Training Institute
                (operating <a href="https://grootstechnologies.com" className="text-[#166534] font-medium underline">grootstechnologies.com</a>) collects through
                its website forms, how we use it, and your rights under the
                <strong className="text-gray-900"> Digital Personal Data Protection Act, 2023 (DPDP)</strong> of India.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3f21] pt-4 tracking-tight">
                1. What we collect
              </h2>
              <ul className="list-disc pl-5 space-y-2.5">
                <li>
                  <strong className="text-gray-900">Contact details</strong> you provide in a form: name, phone, email, free-text message.
                </li>
                <li>
                  <strong className="text-gray-900">Course or trainer-application details</strong>: course of interest, career stage, professional profile, years of experience, domain of expertise.
                </li>
                <li>
                  <strong className="text-gray-900">Technical context</strong> automatically collected at submission: IP address, approximate city and country (derived from IP), device type, browser, operating system, browser language, the page you submitted from, the page you arrived from (HTTP referrer), and the URL of your first visit.
                </li>
                <li>
                  <strong className="text-gray-900">Marketing attribution</strong>: any <code>utm_source</code>, <code>utm_medium</code>, <code>utm_campaign</code>, <code>utm_content</code>, <code>utm_term</code>, <code>gclid</code>, or <code>fbclid</code> parameters present in the URL when you first visited.
                </li>
                <li>
                  <strong className="text-gray-900">Aggregate analytics</strong> from Google Analytics 4 (page views, session length, scroll depth) — governed by Google&apos;s Privacy Policy.
                </li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3f21] pt-4 tracking-tight">
                2. How we use it
              </h2>
              <ul className="list-disc pl-5 space-y-2.5">
                <li>To contact you about your enquiry by phone, WhatsApp, or email.</li>
                <li>To answer your specific questions and recommend programs that match your goals.</li>
                <li>To improve our marketing — knowing which channel brought you helps us focus.</li>
                <li>To detect spam / bot submissions (we use Cloudflare Turnstile).</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3f21] pt-4 tracking-tight">
                3. Who we share it with
              </h2>
              <p>
                Your data is processed by these third parties acting as data processors; Greenroots remains the data fiduciary:
              </p>
              <ul className="list-disc pl-5 space-y-2.5">
                <li><strong className="text-gray-900">ClickUp</strong> — our case-management system. All submitted data is stored here as a task.</li>
                <li><strong className="text-gray-900">Cloudflare</strong> — operates our form intake and CAPTCHA. Cloudflare may see your IP and approximate location.</li>
                <li><strong className="text-gray-900">Resend</strong> — sends our internal email notification to staff; sees only the lead summary.</li>
                <li><strong className="text-gray-900">Google Analytics 4</strong> — aggregate web analytics; does <em>not</em> receive your form submissions.</li>
              </ul>
              <p>We do not sell your data. We do not share it with marketing or ad-tech networks.</p>

              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3f21] pt-4 tracking-tight">
                4. How long we keep it
              </h2>
              <ul className="list-disc pl-5 space-y-2.5">
                <li>Lead records for non-enrolled enquiries: 24 months from last activity, then deleted.</li>
                <li>Enrolled customer records: kept as part of your training history (subject to your deletion request).</li>
                <li>IP addresses associated with leads: redacted after 90 days.</li>
                <li>Analytics aggregates (GA4): governed by Google&apos;s default retention.</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3f21] pt-4 tracking-tight">
                5. Your rights
              </h2>
              <p>You can:</p>
              <ul className="list-disc pl-5 space-y-2.5">
                <li>Ask what we have on file about you.</li>
                <li>Ask us to correct it.</li>
                <li>Ask us to delete it (we will delete or anonymise within 30 days unless legally required to retain it).</li>
                <li>Withdraw your consent at any time. (Withdrawal does not affect the lawfulness of processing already done.)</li>
              </ul>
              <p>
                Contact us at <a href="mailto:greenroots.tech@outlook.com" className="text-[#166534] font-medium underline">greenroots.tech@outlook.com</a> for any of the above.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3f21] pt-4 tracking-tight">
                6. Cookies &amp; local storage
              </h2>
              <p>We use only:</p>
              <ul className="list-disc pl-5 space-y-2.5">
                <li>A <code>localStorage</code> entry called <code>gr_attribution_v1</code> to remember which campaign brought you, so we can attribute the lead.</li>
                <li>Google Analytics 4 first-party cookies for aggregate analytics.</li>
                <li>Cloudflare Turnstile — uses no tracking cookies; purely a bot challenge.</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3f21] pt-4 tracking-tight">
                7. Children
              </h2>
              <p>
                Greenroots&apos;s services are intended for adults seeking professional training. We do not knowingly collect personal information from individuals under 18 without verified parental consent.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-[#0f3f21] pt-4 tracking-tight">
                8. Changes to this policy
              </h2>
              <p>
                If we change this policy materially we will update the &ldquo;Last updated&rdquo; date above. For substantial changes that affect what we collect or how we use it, we will announce the change on our home page for at least 14 days before it takes effect.
              </p>

              <div className="mt-8 p-6 sm:p-7 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200/90 shadow-2xs">
                <p className="font-bold text-gray-900 mb-1">
                  Greenroots Technology Training Institute
                </p>
                <p className="text-sm text-slate-600 mb-2">
                  Unit 206, Manjeera Majestic Commercial, Opposite JNTU, Next to Lulu Mall, Kukatpally, Hyderabad 500072
                </p>
                <p className="text-sm text-slate-600">
                  Phone: <a href="tel:+919549543898" className="text-[#166534] underline font-medium">+91 95495 43898</a> &nbsp;·&nbsp;
                  Email: <a href="mailto:greenroots.tech@outlook.com" className="text-[#166534] underline font-medium">greenroots.tech@outlook.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
