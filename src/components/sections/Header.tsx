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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-[0_4px_24px_-4px_rgba(7,29,58,0.06)]"
          : "bg-white/90 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Logo
              variant="dark"
              showTagline={false}
              className="h-9 lg:h-10 w-auto group-hover:opacity-95 transition-opacity"
            />
          </Link>

          {/* Desktop nav - matching user screenshot */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 p-1 bg-gray-50/60 rounded-xl border border-gray-100/80">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={
                    isActive
                      ? "px-2.5 xl:px-4 py-1.5 text-[13px] xl:text-[15px] font-bold text-white bg-[#166534] hover:bg-[#14532d] rounded-lg shadow-sm transition-all duration-200 inline-flex items-center justify-center whitespace-nowrap"
                      : "px-2.5 xl:px-3.5 py-1.5 text-[13px] xl:text-[15px] font-medium text-gray-700 hover:text-[#166534] hover:bg-white/90 rounded-lg transition-all duration-150 inline-flex items-center justify-center whitespace-nowrap"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2.5 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-800 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#166534]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 py-4 px-1 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
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
                  className={`px-4 py-3 min-h-[44px] flex items-center text-[15px] font-medium rounded-xl transition-all ${
                    isActive
                      ? "bg-[#166534] text-white font-semibold shadow-xs"
                      : "text-gray-700 hover:bg-gray-100/70 hover:text-[#166534]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
}
