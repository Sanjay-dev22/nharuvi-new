"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { INSIGHTS } from "@/lib/data";

export default function InsightsSection() {
  const [featured, ...rest] = INSIGHTS;

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <SectionHeader
            eyebrow="Insights & Thought Leadership"
            title="Intelligence That Drives Better Decisions"
            subtitle="Our experts share their perspectives on the trends, challenges, and opportunities shaping business today."
          />
          <Link
            href="/insights"
            className="shrink-0 inline-flex items-center gap-2 text-[oklch(0.16_0.055_253)] font-body font-medium text-sm border-b border-[oklch(0.65_0.1_73)] pb-0.5 hover:text-[oklch(0.65_0.1_73)] transition-colors group"
          >
            All Insights
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <Link href={`/insights/${featured.slug}`} className="group block h-full">
              <div className="relative h-72 lg:h-96 overflow-hidden rounded-sm">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-flex items-center bg-[oklch(0.65_0.1_73)] text-white text-xs font-body font-semibold px-3 py-1 uppercase tracking-wider w-fit mb-4">
                    {featured.category}
                  </span>
                  <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white leading-tight mb-3 group-hover:text-[oklch(0.85_0.08_73)] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="font-body text-sm text-white/70 leading-relaxed mb-4 line-clamp-2">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/50 font-body text-xs">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side articles */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {rest.slice(0, 4).map((insight, i) => (
              <motion.div
                key={insight.slug}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/insights/${insight.slug}`} className="group flex gap-4 items-start">
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-body text-xs font-semibold uppercase tracking-wider text-[oklch(0.65_0.1_73)]">
                      {insight.category}
                    </span>
                    <h4 className="font-heading text-base font-semibold text-[oklch(0.16_0.055_253)] group-hover:text-[oklch(0.65_0.1_73)] transition-colors leading-snug mt-1 mb-1 line-clamp-2">
                      {insight.title}
                    </h4>
                    <div className="flex items-center gap-3 text-gray-400 font-body text-xs">
                      <span>{insight.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {insight.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
