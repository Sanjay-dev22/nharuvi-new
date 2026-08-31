"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, BookOpen } from "lucide-react";

const CULTURE_IMAGES = [
  "/images/culture/culture-collaboration.jpg",
  "/images/culture/culture-team-collaboration.jpg",
  "/images/culture/culture-office.jpg",
];

export default function CareersPreview() {
  return (
    <section className="section-padding bg-[oklch(0.16_0.055_253)] overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[oklch(0.65_0.1_73)]" />
              <span className="text-[oklch(0.65_0.1_73)] font-body text-xs uppercase tracking-[0.2em] font-semibold">
                Careers
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
              Build Something<br />Extraordinary.
            </h2>
            <p className="font-body text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Join a firm where talented people do meaningful work. We invest in your growth, celebrate your achievements, and challenge you to become the best professional you can be.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Users, label: "Collaborative Culture", desc: "Work alongside the best minds in the industry" },
                { icon: TrendingUp, label: "Career Acceleration", desc: "Fast-track growth with mentorship and real responsibility" },
                { icon: BookOpen, label: "Continuous Learning", desc: "Structured learning paths and professional development" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-[oklch(0.65_0.1_73)]" />
                  </div>
                  <div>
                    <div className="font-heading text-base font-semibold text-white">{item.label}</div>
                    <div className="font-body text-sm text-white/50">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/careers"
              className="inline-flex items-center gap-3 bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white px-8 py-4 font-body font-medium text-sm tracking-wide transition-colors group"
            >
              Explore Opportunities
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-[480px]"
          >
            <div className="absolute top-0 left-0 w-[60%] h-[55%] overflow-hidden rounded-sm">
              <Image src={CULTURE_IMAGES[0]} alt="Team collaboration" fill className="object-cover" sizes="40vw" />
            </div>
            <div className="absolute top-4 right-0 w-[37%] h-[40%] overflow-hidden rounded-sm">
              <Image src={CULTURE_IMAGES[1]} alt="Team meeting" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="absolute bottom-0 left-[15%] w-[65%] h-[42%] overflow-hidden rounded-sm">
              <Image src={CULTURE_IMAGES[2]} alt="Office culture" fill className="object-cover" sizes="45vw" />
            </div>
            <div className="absolute bottom-8 right-0 bg-[oklch(0.65_0.1_73)] p-5 text-center rounded-sm">
              <div className="font-heading text-3xl font-semibold text-white">50+</div>
              <div className="font-body text-xs text-white/70 uppercase tracking-wider mt-0.5">Open Roles</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
