"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { CASE_STUDIES } from "@/lib/data";

export default function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-[oklch(0.975_0_0)]">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <SectionHeader
            eyebrow="Client Success Stories"
            title="Results That Speak for Themselves"
            subtitle="We measure our success by the outcomes we drive for our clients."
          />
          <Link
            href="/case-studies"
            className="shrink-0 inline-flex items-center gap-2 text-[oklch(0.16_0.055_253)] font-body font-medium text-sm border-b border-[oklch(0.65_0.1_73)] pb-0.5 hover:text-[oklch(0.65_0.1_73)] transition-colors group"
          >
            All Case Studies
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <Link href={`/case-studies/${cs.slug}`} className="group block h-full">
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[oklch(0.65_0.1_73)] text-white text-xs font-body font-medium px-3 py-1 uppercase tracking-wider">
                        {cs.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-heading text-xl font-semibold text-[oklch(0.16_0.055_253)] mb-3 group-hover:text-[oklch(0.26_0.07_253)] transition-colors leading-tight">
                      {cs.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">
                      {cs.challenge}
                    </p>

                    {/* Metrics */}
                    <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-gray-100">
                      {cs.results.map((r) => (
                        <div key={r.label} className="text-center">
                          <div className="font-heading text-xl font-semibold text-[oklch(0.65_0.1_73)]">{r.metric}</div>
                          <div className="font-body text-xs text-gray-400 leading-tight mt-0.5">{r.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-[oklch(0.65_0.1_73)] font-body text-sm font-medium">
                      <span>Read the Story</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
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
