"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className={cn(
          "flex items-center gap-3 mb-4",
          align === "center" && "justify-center"
        )}>
          <div className="w-8 h-px bg-[oklch(0.65_0.1_73)]" />
          <span
            className={cn(
              "text-xs font-body uppercase tracking-[0.2em] font-semibold",
              light ? "text-[oklch(0.65_0.1_73)]" : "text-[oklch(0.65_0.1_73)]"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4",
          light ? "text-white" : "text-[oklch(0.16_0.055_253)]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "font-body text-base md:text-lg leading-relaxed",
            light ? "text-white/65" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
