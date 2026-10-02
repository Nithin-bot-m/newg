"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Programs", href: "#programs" },
  { label: "Courses", href: "#courses" },
  { label: "Mentors", href: "#mentors" },
  { label: "Study Abroad", href: "#study-abroad" },
  { label: "Services", href: "#services" },
  { label: "Campus", href: "#campus" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <Logo
              variant="dark"
              showTagline={false}
              className="h-9 lg:h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(0, 7).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#071D3A] hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#071D3A] hover:bg-gray-50 rounded-md transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-semibold text-[#00AFA8] border border-[#00AFA8]/40 rounded-md hover:bg-[#00AFA8]/10 transition-colors inline-block"
            >
              Free Career Audit
            </a>
            <a
              href="#contact"
              className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white rounded-md hover:from-[#0766c6] hover:to-[#00a3cc] transition-all shadow-sm inline-block"
            >
              Talk to a Counsellor
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2 text-[#071D3A]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2 text-sm font-semibold text-[#00AFA8] border border-[#00AFA8]/30 rounded-md hover:bg-[#00AFA8]/5"
              >
                Career Audit
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-5 py-2 text-sm font-semibold bg-gradient-to-r from-[#0878E8] to-[#00B8E6] text-white rounded-md hover:from-[#0766c6] hover:to-[#00a3cc]"
              >
                Talk to Counsellor
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
