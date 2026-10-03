import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, ChevronRight } from "lucide-react";
import { Logo } from "@/components/logo";

const FOOTER_COLUMNS = [
  {
    title: "Programs",
    links: [
      { name: "Power BI Mastery", href: "/courses" },
      { name: "Business Analyst", href: "/courses" },
      { name: "DevSecOps", href: "/courses" },
      { name: "Data Analytics", href: "/courses" },
      { name: "Software Testing", href: "/courses" },
      { name: "Data Science", href: "/courses" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Career Audit", href: "/contact" },
      { name: "Course Counselling", href: "/contact" },
      { name: "Resume Building", href: "/courses" },
      { name: "Mock Interviews", href: "/crt" },
      { name: "Placement Support", href: "/reviews" },
      { name: "Study Abroad Wing", href: "/study-abroad" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "About Greenroots", href: "/#hero" },
      { name: "All Programs", href: "/courses" },
      { name: "Student Reviews", href: "/reviews" },
      { name: "CRT Programs", href: "/crt" },
      { name: "Become a Trainer", href: "/become-a-trainer" },
      { name: "Study Abroad", href: "/study-abroad" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/80 text-slate-800 border-t border-slate-200/90 overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#166534]/30 to-transparent pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-80 h-80 bg-[#166534]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-80 h-80 bg-[#EA580C]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Contact column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="inline-flex mb-5 group transition-transform duration-200 hover:scale-[1.02]"
                aria-label="Greenroots Home"
              >
                <Logo
                  variant="dark"
                  showTagline
                  className="h-12 sm:h-14 lg:h-16 w-auto drop-shadow-xs"
                />
              </Link>

              <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                Greenroots is a technology training institute in Hyderabad offering
                job-ready courses in Power BI, Data Analytics, Business Analysis,
                DevSecOps, and Software Testing — with a free career audit and placement support.
              </p>

              {/* Connect section */}
              <div className="mt-8 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#166534]" />
                  Connect
                </h4>

                <div className="space-y-2.5 text-sm text-slate-600">
                  <a
                    href="mailto:greenroots.tech@outlook.com"
                    className="flex items-center gap-2.5 hover:text-[#166534] transition-colors group"
                  >
                    <span className="h-7 w-7 rounded-lg bg-emerald-50 text-[#166534] border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-[#166534] group-hover:text-white transition-colors">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium text-slate-700 group-hover:text-[#166534] transition-colors">
                      greenroots.tech@outlook.com
                    </span>
                  </a>

                  <a
                    href="tel:+919549543898"
                    className="flex items-center gap-2.5 hover:text-[#166534] transition-colors group"
                  >
                    <span className="h-7 w-7 rounded-lg bg-emerald-50 text-[#166534] border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-[#166534] group-hover:text-white transition-colors">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-medium text-slate-700 group-hover:text-[#166534] transition-colors">
                      +91 95495 43898
                    </span>
                  </a>

                  <div className="flex items-start gap-2.5 pt-0.5">
                    <span className="h-7 w-7 rounded-lg bg-emerald-50 text-[#166534] border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 leading-snug">
                      Unit 206, Manjeera Majestic Commercial, Opp. JNTU, Next to Lulu Mall, Kukatpally, Hyderabad
                    </span>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="pt-3">
                  <a
                    href="https://wa.me/919549543898?text=Hi%20Greenroots!%20I%27d%20like%20to%20know%20more%20about%20your%20training%20programs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-[0_8px_20px_-4px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 min-h-[42px]"
                  >
                    <MessageCircle className="h-4 w-4 fill-white" />
                    <span>Chat with us on WhatsApp (+91 95495 43898)</span>
                    <span className="font-bold">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#166534]" />
                  {col.title}
                </h3>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-600 hover:text-[#166534] hover:translate-x-1 transition-all duration-150 inline-flex items-center gap-1.5 py-0.5 group font-medium"
                      >
                        <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-[#166534] transition-colors" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Green Roots Technologies. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-500 hover:text-[#166534] font-medium transition-colors hover:underline"
            >
              Privacy Policy
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              {[
                { name: "LinkedIn", href: "https://www.linkedin.com/company/grootstechnologies/" },
                { name: "Instagram", href: "https://www.instagram.com/grootstechnologies/" },
                { name: "YouTube", href: "https://youtube.com/@greenroots_techtalks" },
                { name: "WhatsApp", href: "https://wa.me/919549543898?text=Hi%20Greenroots!%20I'd%20like%20to%20chat." },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="px-3 py-1.5 text-xs rounded-full bg-white border border-slate-200/90 hover:border-[#166534]/50 hover:bg-[#166534]/5 hover:text-[#166534] text-slate-700 font-medium transition-all shadow-xs"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
