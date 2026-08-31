"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <Image
        src="/images/hero/hero-corporate-building.jpg"
        alt="Corporate headquarters"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.05_253)]/90 to-[oklch(0.10_0.05_253)]/70" />

      <div className="relative z-10 container-wide">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[oklch(0.65_0.1_73)]" />
              <span className="text-[oklch(0.65_0.1_73)] font-body text-xs uppercase tracking-[0.2em] font-semibold">
                Get Started
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Ready to Grow<br />with Confidence?
            </h2>
            <p className="font-body text-white/60 text-lg leading-relaxed mb-10">
              Schedule a complimentary consultation with one of our senior advisors and discover how Nharuvi Global can help you navigate your next chapter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white px-8 py-4 font-body font-medium text-sm tracking-wide transition-colors group"
              >
                Schedule a Consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-white text-white px-8 py-4 font-body font-medium text-sm tracking-wide transition-colors"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a href="tel:+918056995508" className="flex items-center gap-3 text-white/60 hover:text-white font-body text-sm transition-colors">
                <Phone size={16} className="text-[oklch(0.65_0.1_73)]" />
                +91 80569 95508
              </a>
              <a href="mailto:nharuviglobal@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white font-body text-sm transition-colors">
                <Mail size={16} className="text-[oklch(0.65_0.1_73)]" />
                nharuviglobal@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
