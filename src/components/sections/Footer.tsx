import Link from "next/link";
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
    <footer className="bg-gradient-to-b from-[#051429] via-[#071D3A] to-[#030B17] text-white border-t border-[#00AFA8]/30 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-4">
              <Logo variant="light" showTagline className="h-10" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Greenroots is a technology training institute in Hyderabad offering job-ready courses in Power BI, Data Analytics, Business Analysis, DevSecOps and Software Testing — with a free career audit and placement support.
            </p>

            <h4 className="mt-8 text-sm font-semibold text-white">Connect</h4>
            <div className="mt-3 space-y-1 text-sm text-gray-400">
              <p>
                Email:{" "}
                <a href="mailto:greenroots.tech@outlook.com" className="hover:text-[#0878E8]">
                  greenroots.tech@outlook.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919549543898" className="hover:text-[#0878E8]">
                  +91 95495 43898
                </a>
              </p>
              <p>
                Address:{" "}
                <span className="text-gray-300">
                  Unit 206, Manjeera Majestic Commercial, Opp. JNTU, Next to Lulu Mall, Kukatpally, Hyderabad
                </span>
              </p>
              <p className="pt-1">
                <a
                  href="https://wa.me/919549543898?text=Hi%20Greenroots!%20I%27d%20like%20to%20know%20more%20about%20your%20training%20programs."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0878E8] font-medium"
                >
                  Chat with us on WhatsApp (+91 95495 43898) →
                </a>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#0878E8] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Green Roots Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-gray-400 hover:text-white transition-colors underline"
            >
              Privacy Policy
            </Link>
            <div className="flex items-center gap-3">
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
                  className="px-2.5 py-1 text-xs rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
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
