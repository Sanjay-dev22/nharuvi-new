"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { SERVICES } from "@/lib/data";

export default function CoreServices() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="section-padding bg-[oklch(0.975_0_0)]">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Our Services"
            title="Expertise Across Every Dimension of Your Business"
            subtitle="From day-to-day accounting to long-term strategic advisory, our integrated service lines give you everything you need under one trusted roof."
          />
          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 text-[oklch(0.16_0.055_253)] font-body font-medium text-sm border-b border-[oklch(0.65_0.1_73)] pb-0.5 hover:text-[oklch(0.65_0.1_73)] transition-colors group"
          >
            View All Services
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services grid - alternating layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.cardImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[oklch(0.65_0.1_73)] text-white text-xs font-body font-medium px-3 py-1 uppercase tracking-wider">
                        {service.shortTitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-xl font-semibold text-[oklch(0.16_0.055_253)] mb-2 group-hover:text-[oklch(0.26_0.07_253)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">
                      {service.tagline}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[oklch(0.65_0.1_73)] font-body text-sm font-medium">
                      <span>Learn More</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional services strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-[oklch(0.16_0.055_253)] rounded-sm p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-white">
            <span className="font-heading text-xl font-semibold">Also offering: </span>
            <span className="font-body text-white/60 text-sm">
              {SERVICES.slice(6).map(s => s.title).join(" • ")}
            </span>
          </div>
          <Link
            href="/services"
            className="shrink-0 bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white px-6 py-3 font-body font-medium text-sm transition-colors rounded-sm"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
