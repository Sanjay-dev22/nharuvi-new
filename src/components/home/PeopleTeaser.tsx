"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PEOPLE } from "@/lib/data";
import PersonAvatar from "@/components/shared/PersonAvatar";

export default function PeopleTeaser() {
  const featured = PEOPLE.slice(0, 4);

  return (
    <section className="section-padding bg-[oklch(0.975_0_0)]">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[oklch(0.65_0.1_73)]" />
              <span className="text-[oklch(0.65_0.1_73)] font-body text-xs uppercase tracking-[0.2em] font-semibold">
                Our People
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-[oklch(0.16_0.055_253)] leading-tight mb-4">
              The Professionals Behind the Work
            </h2>
            <p className="font-body text-gray-500 text-base md:text-lg leading-relaxed">
              Our team combines CPAs, Chartered Accountants, CFAs, Company Secretaries, and technology specialists — bringing integrated expertise to every client engagement.
            </p>
          </div>
          <Link
            href="/people"
            className="shrink-0 inline-flex items-center gap-2 text-[oklch(0.16_0.055_253)] font-body font-medium text-sm border-b border-[oklch(0.65_0.1_73)] pb-0.5 hover:text-[oklch(0.65_0.1_73)] transition-colors group"
          >
            Meet the Team
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featured.map((person, i) => (
            <motion.div
              key={person.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link href={`/people/${person.slug}`} className="group block">
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                  <div className="relative h-56 overflow-hidden">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    ) : (
                      <PersonAvatar name={person.name} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.055_253)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span className="font-body text-xs text-white font-medium uppercase tracking-wider">
                        View Profile →
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="w-6 h-0.5 bg-[oklch(0.65_0.1_73)] mb-2" />
                    <div className="font-heading text-base font-semibold text-[oklch(0.16_0.055_253)] group-hover:text-[oklch(0.65_0.1_73)] transition-colors">
                      {person.name}
                      {person.designation && (
                        <span className="font-body text-xs text-[oklch(0.65_0.1_73)] font-normal ml-1.5">
                          {person.designation}
                        </span>
                      )}
                    </div>
                    <div className="font-body text-xs text-gray-400 mt-0.5 leading-tight">{person.role}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <Link
            href="/people"
            className="inline-flex items-center gap-3 bg-[oklch(0.16_0.055_253)] hover:bg-[oklch(0.22_0.07_253)] text-white px-8 py-3.5 font-body font-medium text-sm tracking-wide transition-colors group"
          >
            Meet All {PEOPLE.length} Team Members
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
