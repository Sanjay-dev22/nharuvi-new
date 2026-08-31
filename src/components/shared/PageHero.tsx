"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs?: Breadcrumb[];
  overlay?: "dark" | "medium" | "light";
  eyebrow?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  breadcrumbs,
  overlay = "dark",
  eyebrow,
}: PageHeroProps) {
  const overlayClass =
    overlay === "dark"
      ? "from-black/80 via-black/50 to-black/30"
      : overlay === "medium"
      ? "from-black/70 via-black/40 to-black/20"
      : "from-black/60 via-black/30 to-transparent";

  return (
    <section className="relative h-[45vh] min-h-[400px] md:h-[55vh] md:min-h-[480px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayClass}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="relative z-10 h-full flex items-end pb-16">
        <div className="container-wide w-full">
          {breadcrumbs && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-4 font-body text-xs text-white/50"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              {breadcrumbs.map((bc, i) => (
                <span key={i} className="flex items-center gap-2">
                  <ChevronRight size={12} />
                  {bc.href ? (
                    <Link href={bc.href} className="hover:text-white transition-colors">
                      {bc.label}
                    </Link>
                  ) : (
                    <span className="text-white/80">{bc.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>
          )}

          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-6 h-px bg-[oklch(0.65_0.1_73)]" />
              <span className="text-[oklch(0.65_0.1_73)] font-body text-xs uppercase tracking-[0.2em] font-semibold">
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-body text-base md:text-lg text-white/65 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
