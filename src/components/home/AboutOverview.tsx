"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Users } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const PILLARS = [
  { icon: Award, label: "Precision & Accuracy", desc: "Every deliverable reviewed for accuracy, compliance, and clarity" },
  { icon: Globe, label: "Multi-Jurisdiction Expertise", desc: "Indian, US, and Australian tax and regulatory frameworks" },
  { icon: Users, label: "Client-Centric Approach", desc: "Personalised service with proactive, transparent communication" },
];

export default function AboutOverview() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative h-[520px] lg:h-[600px]">
              {/* Main image */}
              <div className="absolute top-0 left-0 w-[78%] h-[80%] overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="/images/culture/culture-team-meeting.jpg"
                  alt="Executive team meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Secondary image */}
              <div className="absolute bottom-0 right-0 w-[52%] h-[52%] overflow-hidden rounded-sm shadow-xl border-4 border-white">
                <Image
                  src="/images/about/about-professional-consultation.jpg"
                  alt="Financial analysis"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              {/* Gold accent bar */}
              <div className="absolute top-8 -left-4 w-2 h-32 bg-[oklch(0.65_0.1_73)]" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <SectionHeader
              eyebrow="About Nharuvi Global"
              title="Precise. Transparent. Client-Centric."
              subtitle="Nharuvi Global Private Limited is a forward-thinking accounting and consulting firm delivering precise, transparent, and client-centric financial solutions for businesses operating locally and globally."
            />

            <div className="mt-10 space-y-5">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-11 h-11 rounded-sm bg-[oklch(0.16_0.055_253)]/5 group-hover:bg-[oklch(0.65_0.1_73)] flex items-center justify-center shrink-0 transition-colors duration-300">
                    <p.icon size={18} className="text-[oklch(0.16_0.055_253)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-[oklch(0.16_0.055_253)] mb-0.5">{p.label}</h4>
                    <p className="font-body text-sm text-gray-500">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[oklch(0.16_0.055_253)] hover:bg-[oklch(0.22_0.07_253)] text-white px-7 py-3.5 font-body font-medium text-sm tracking-wide transition-colors group"
              >
                Our Story
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-[oklch(0.16_0.055_253)] text-[oklch(0.16_0.055_253)] hover:bg-[oklch(0.16_0.055_253)] hover:text-white px-7 py-3.5 font-body font-medium text-sm tracking-wide transition-all"
              >
                Speak with a Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
