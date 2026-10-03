"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

import MagneticButton from "@/components/smoothui/magnetic-button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Reviews", href: "/reviews" },
  { label: "CRT", href: "/crt" },
  { label: "Become a Trainer", href: "/become-a-trainer" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState("Home");

  useEffect(() => {
    if (pathname.startsWith("/courses")) setActive("Courses");
    else if (pathname.startsWith("/reviews")) setActive("Reviews");
    else if (pathname.startsWith("/crt")) setActive("CRT");
    else if (pathname.startsWith("/become-a-trainer")) setActive("Become a Trainer");
    else if (pathname.startsWith("/study-abroad")) setActive("Study Abroad");
    else if (pathname.startsWith("/contact")) setActive("Contact");
    else setActive("Home");
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Logo
              variant="dark"
              showTagline={false}
              className="h-9 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop nav - matching user screenshot */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={
                    isActive
                      ? "px-4 py-1.5 text-[15px] font-bold text-white bg-[#166534] hover:bg-[#14532d] rounded-lg shadow-sm transition-all inline-flex items-center justify-center"
                      : "px-3.5 py-1.5 text-[15px] font-medium text-gray-700 hover:text-[#166534] hover:bg-gray-50/80 rounded-lg transition-colors inline-flex items-center justify-center"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <MagneticButton asChild strength={10}>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-semibold text-[#166534] border border-[#166534]/30 rounded-lg hover:bg-[#166534]/5 transition-colors inline-block"
              >
                Career Audit
              </Link>
            </MagneticButton>
            <MagneticButton asChild strength={14}>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-semibold bg-[#166534] text-white rounded-lg hover:bg-[#14532d] transition-all shadow-sm inline-block"
              >
                Enrol Now →
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2 text-gray-800"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setOpen(false);
                  }}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-[#166534] text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#166534]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex gap-2 pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2 text-sm font-semibold text-[#166534] border border-[#166534]/30 rounded-md hover:bg-[#166534]/5"
              >
                Career Audit
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-5 py-2 text-sm font-semibold bg-[#166534] text-white rounded-md hover:bg-[#14532d]"
              >
                Enrol Now →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
