import { Logo } from "@/components/logo";

const FOOTER_COLUMNS = [
  {
    title: "Programs",
    links: [
      { name: "Power BI Mastery", href: "#courses" },
      { name: "Business Analyst", href: "#courses" },
      { name: "DevSecOps", href: "#courses" },
      { name: "Data Analytics", href: "#courses" },
      { name: "Software Testing", href: "#courses" },
      { name: "Data Science", href: "#courses" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Career Audit", href: "#contact" },
      { name: "Course Counselling", href: "#contact" },
      { name: "Resume Building", href: "#services" },
      { name: "Mock Interviews", href: "#campus" },
      { name: "Placement Support", href: "#programs" },
      { name: "Study Abroad Wing", href: "#study-abroad" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "About Greenroots", href: "#hero" },
      { name: "Campus Hub", href: "#locations" },
      { name: "Expert Mentors", href: "#mentors" },
      { name: "FAQs", href: "#faq" },
      { name: "Contact & Walk-in", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#051c11] via-[#03150d] to-[#020d08] text-white border-t border-[#084428]/30 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-flex mb-4">
              <Logo variant="light" showTagline className="h-10" />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Greenroots is a technology training institute in Hyderabad offering job-ready courses in Power BI, Data Analytics, Business Analysis, DevSecOps and Software Testing — with a free career audit and placement support.
            </p>

            <h4 className="mt-8 text-sm font-semibold text-white">Connect</h4>
            <div className="mt-3 space-y-1 text-sm text-gray-400">
              <p>
                Email:{" "}
                <a href="mailto:greenroots.tech@outlook.com" className="hover:text-[#FC6C18]">
                  greenroots.tech@outlook.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+919549543898" className="hover:text-[#FC6C18]">
                  +91 95495 43898
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/919549543898?text=Hi%20Greenroots,%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FC6C18] font-medium"
                >
                  Chat with us on WhatsApp →
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
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#FC6C18] transition-colors"
                    >
                      {link.name}
                    </a>
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
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="h-8 w-8 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <span className="text-[10px] font-bold text-gray-400">
                  {s.charAt(0)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
