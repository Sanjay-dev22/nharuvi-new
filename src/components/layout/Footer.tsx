import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SERVICES, INDUSTRIES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.055_253)] text-white">
      {/* Main Footer */}
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[oklch(0.65_0.1_73)] flex items-center justify-center rounded-sm shrink-0">
                <span className="text-white font-heading font-bold text-xl leading-none">N</span>
              </div>
              <span className="text-white font-heading font-semibold text-xl tracking-wide leading-none">
                Nharuvi Global
              </span>
            </Link>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-6 max-w-xs">
              A forward-thinking accounting and consulting firm delivering precise, transparent, and client-centric financial solutions for businesses operating locally and globally.
            </p>
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", letter: "in" },
                { label: "Twitter", letter: "𝕏" },
                { label: "Facebook", letter: "f" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/40 transition-colors font-body text-xs font-semibold"
                  aria-label={s.label}
                >
                  {s.letter}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-white tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/55 hover:text-[oklch(0.65_0.1_73)] font-body text-sm transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[oklch(0.65_0.1_73)] hover:text-white font-body text-sm transition-colors"
                >
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-white tracking-wide">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {INDUSTRIES.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="text-white/55 hover:text-[oklch(0.65_0.1_73)] font-body text-sm transition-colors"
                  >
                    {i.title.split("&")[0].trim()}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-[oklch(0.65_0.1_73)] hover:text-white font-body text-sm transition-colors"
                >
                  All Industries →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-5 text-white tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/60">
                <MapPin size={16} className="shrink-0 mt-0.5 text-[oklch(0.65_0.1_73)]" />
                <span className="font-body text-sm leading-relaxed">
                  OMBR Layout Main Road, Hi Tech Building<br />
                  Bengaluru East, Karnataka 560043, IN
                </span>
              </li>
              <li>
                <a
                  href="tel:+918056995508"
                  className="flex gap-3 text-white/60 hover:text-white font-body text-sm transition-colors"
                >
                  <Phone size={16} className="shrink-0 text-[oklch(0.65_0.1_73)]" />
                  +91 80569 95508
                </a>
              </li>
              <li>
                <a
                  href="mailto:nharuviglobal@gmail.com"
                  className="flex gap-3 text-white/60 hover:text-white font-body text-sm transition-colors"
                >
                  <Mail size={16} className="shrink-0 text-[oklch(0.65_0.1_73)]" />
                  nharuviglobal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 font-body text-xs">
            © {new Date().getFullYear()} Nharuvi Global. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/40 hover:text-white font-body text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white font-body text-xs transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="text-white/40 hover:text-white font-body text-xs transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
