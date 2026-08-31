"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { PEOPLE } from "@/lib/data";

export default function LeadershipSection() {
  return (
    <section className="section-padding bg-[oklch(0.975_0_0)]">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <SectionHeader
            eyebrow="Our Leadership"
            title="Led by Experience. Driven by Results."
            subtitle="Our leadership team brings decades of combined expertise across accounting, advisory, and corporate finance."
          />
          <Link
            href="/about#leadership"
            className="shrink-0 inline-flex items-center gap-2 text-[oklch(0.16_0.055_253)] font-body font-medium text-sm border-b border-[oklch(0.65_0.1_73)] pb-0.5 hover:text-[oklch(0.65_0.1_73)] transition-colors group"
          >
            Meet the Team
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PEOPLE.slice(0, 4).map((person, i) => (
            <motion.div
              key={person.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5">
                  <div className="w-8 h-0.5 bg-[oklch(0.65_0.1_73)] mb-3" />
                  <h3 className="font-heading text-lg font-semibold text-[oklch(0.16_0.055_253)]">
                    {person.name}
                    {person.designation && (
                      <span className="font-body text-[11px] text-[oklch(0.65_0.1_73)] font-normal ml-1.5">{person.designation}</span>
                    )}
                  </h3>
                  <p className="font-body text-xs text-[oklch(0.65_0.1_73)] uppercase tracking-wider font-medium mt-0.5 mb-3">
                    {person.role}
                  </p>
                  <p className="font-body text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {person.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
