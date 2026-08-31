"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { INDUSTRIES } from "@/lib/data";

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-[oklch(0.16_0.055_253)] overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Deep Expertise Where It Matters"
            subtitle="We combine sector-specific knowledge with broad advisory capabilities to deliver advice that is genuinely relevant to your industry context."
            light
          />
          <Link
            href="/industries"
            className="shrink-0 inline-flex items-center gap-2 text-[oklch(0.65_0.1_73)] font-body font-medium text-sm border-b border-[oklch(0.65_0.1_73)] pb-0.5 hover:text-white hover:border-white transition-colors group"
          >
            All Industries
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link href={`/industries/${industry.slug}`} className="group block relative">
                <div className="relative h-48 md:h-56 overflow-hidden rounded-sm">
                  <Image
                    src={industry.cardImage}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${industry.color}/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-sm md:text-base font-semibold text-white leading-tight">
                      {industry.title}
                    </h3>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/0 group-hover:bg-[oklch(0.65_0.1_73)] flex items-center justify-center transition-all duration-300">
                    <ArrowRight size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
