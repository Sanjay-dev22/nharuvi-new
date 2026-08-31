"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/data";

const NAV_ITEMS = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: SERVICES.slice(0, 10).map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Our People", href: "/people" },
  { label: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navBg =
    isHomePage && !scrolled
      ? "bg-transparent"
      : "bg-[oklch(0.16_0.055_253)] shadow-lg";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        navBg
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[oklch(0.65_0.1_73)] flex items-center justify-center rounded-sm shrink-0">
              <span className="text-white font-heading font-bold text-xl leading-none">N</span>
            </div>
            <span className="text-white font-heading font-semibold text-xl tracking-wide leading-none">
              Nharuvi Global
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 font-body text-sm font-medium text-white/80 hover:text-white transition-colors",
                    pathname.startsWith(item.href) && item.href !== "/" && "text-white"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className="transition-transform group-hover:rotate-180"
                    />
                  )}
                </Link>

                {item.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 w-64 bg-white shadow-2xl border border-gray-100 rounded-sm py-2 transition-all duration-200",
                      activeDropdown === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    )}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm font-body text-gray-700 hover:text-[oklch(0.16_0.055_253)] hover:bg-gray-50 transition-colors border-l-2 border-transparent hover:border-[oklch(0.65_0.1_73)] mx-2 rounded-sm"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918056995508"
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-body transition-colors"
            >
              <Phone size={14} />
              <span>+91 80569 95508</span>
            </a>
            <Link
              href="/contact"
              className="bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white px-5 py-2.5 text-sm font-body font-medium tracking-wide transition-colors rounded-sm"
            >
              Get a Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.16_0.055_253)] border-t border-white/10 max-h-screen overflow-y-auto">
          <div className="container-wide py-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-white font-body font-medium border-b border-white/10"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mt-1 mb-3 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-2 text-sm text-white/60 hover:text-white font-body transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block bg-[oklch(0.65_0.1_73)] text-white text-center py-3 font-body font-medium rounded-sm"
              >
                Get a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
