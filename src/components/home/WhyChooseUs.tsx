"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Left: header + image collage */}
          <div className="lg:w-[45%] lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="Why Nharuvi Global"
              title="The Standard Others Aspire To"
              subtitle="We are not just another accounting firm. We are your long-term growth partner, bringing together the full spectrum of expertise that ambitious businesses need."
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 relative h-80 lg:h-96"
            >
              <div className="absolute inset-0 overflow-hidden rounded-sm">
                <Image
                  src="/images/services/service-consulting-hero.jpg"
                  alt="Executive boardroom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.055_253)]/60 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-[oklch(0.16_0.055_253)]/90 backdrop-blur-sm p-5 rounded-sm">
                <p className="font-heading text-lg text-white font-medium leading-snug">
                  &ldquo;Nharuvi Global transformed our financial operations and helped us raise our Series B with confidence.&rdquo;
                </p>
                <p className="font-body text-xs text-[oklch(0.65_0.1_73)] mt-2 uppercase tracking-wider">
                  — CEO, Technology Company
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: reasons */}
          <div className="lg:w-[55%] space-y-6">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group flex gap-6 items-start bg-[oklch(0.975_0_0)] hover:bg-[oklch(0.16_0.055_253)] p-6 rounded-sm transition-all duration-500 cursor-default"
              >
                <div className="relative w-24 h-20 shrink-0 overflow-hidden rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-5 h-px bg-[oklch(0.65_0.1_73)]" />
                    <span className="font-body text-xs uppercase tracking-widest text-[oklch(0.65_0.1_73)] font-medium">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[oklch(0.16_0.055_253)] group-hover:text-white mb-2 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 group-hover:text-white/65 leading-relaxed transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
