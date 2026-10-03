"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_4px_20px_-4px_rgba(7,29,58,0.06)]"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 lg:h-20 items-center justify-between gap-6 sm:gap-10">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 py-0.5 transition-all duration-200 hover:opacity-95 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#166534] focus-visible:ring-offset-2 rounded-lg"
            aria-label="Greenroots Home"
          >
            <Logo
              variant="dark"
              showTagline
              className="h-11 sm:h-12 lg:h-14 w-auto drop-shadow-xs"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={`px-3.5 xl:px-4 py-2 text-[14px] xl:text-[14.5px] rounded-lg transition-all duration-200 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#166534] focus-visible:ring-offset-1 ${
                    isActive
                      ? "font-semibold text-[#166534] bg-[#166534]/[0.08] relative after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-[2px] after:bg-[#166534] after:rounded-full"
                      : "font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-1.5 min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#166534] focus-visible:ring-offset-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? (
              <X className="h-6 w-6 stroke-[2]" />
            ) : (
              <Menu className="h-6 w-6 stroke-[2]" />
            )}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl py-3 px-2 shadow-[0_12px_28px_-6px_rgba(7,29,58,0.08)] animate-in fade-in slide-in-from-top-1.5 duration-200 ease-out">
            <div className="flex flex-col space-y-1">
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
                    className={`px-3.5 py-2.5 min-h-[44px] flex items-center justify-between text-[14.5px] rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#166534] ${
                      isActive
                        ? "bg-[#166534]/10 text-[#166534] font-semibold"
                        : "text-slate-700 font-medium hover:bg-slate-100/70 hover:text-slate-950 active:bg-slate-100"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#166534]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
