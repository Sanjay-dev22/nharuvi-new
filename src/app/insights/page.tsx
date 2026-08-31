import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import { INSIGHTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights & Thought Leadership",
  description:
    "Expert perspectives from Nharuvi Global on tax, compliance, risk, digital transformation, CFO leadership, and growth strategy.",
};

const CATEGORIES = ["All", "Tax", "Compliance", "Risk", "Digital Transformation", "CFO Leadership", "International Expansion", "Finance"];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        title="Intelligence That Shapes Better Decisions"
        subtitle="Our experts share their perspectives on the trends, challenges, and opportunities shaping business today."
        image="/images/services/service-risk-advisory-hero.jpg"
        breadcrumbs={[{ label: "Insights" }]}
        eyebrow="Thought Leadership"
      />

      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`font-body text-sm px-4 py-2 rounded-sm border transition-colors ${
                  cat === "All"
                    ? "bg-[oklch(0.16_0.055_253)] text-white border-[oklch(0.16_0.055_253)]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[oklch(0.16_0.055_253)] hover:text-[oklch(0.16_0.055_253)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Featured */}
            <div className="lg:col-span-7">
              <Link href={`/insights/${INSIGHTS[0].slug}`} className="group block">
                <div className="relative h-80 overflow-hidden rounded-sm">
                  <Image
                    src={INSIGHTS[0].image}
                    alt={INSIGHTS[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="inline-flex items-center bg-[oklch(0.65_0.1_73)] text-white text-xs font-body font-semibold px-3 py-1 uppercase tracking-wider w-fit mb-4">
                      {INSIGHTS[0].category}
                    </span>
                    <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-white leading-tight mb-3 group-hover:text-[oklch(0.85_0.08_73)] transition-colors">
                      {INSIGHTS[0].title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/50 font-body text-xs">
                      <span>{INSIGHTS[0].date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={12} />{INSIGHTS[0].readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              {INSIGHTS.slice(1, 4).map((insight) => (
                <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group flex gap-4 items-start bg-white p-4 rounded-sm hover:shadow-md transition-all">
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-sm">
                    <Image src={insight.image} alt={insight.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="80px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-body text-xs font-semibold uppercase tracking-wider text-[oklch(0.65_0.1_73)]">{insight.category}</span>
                    <h4 className="font-heading text-base font-semibold text-[oklch(0.16_0.055_253)] group-hover:text-[oklch(0.65_0.1_73)] transition-colors leading-snug mt-1 mb-1 line-clamp-2">
                      {insight.title}
                    </h4>
                    <div className="flex items-center gap-3 text-gray-400 font-body text-xs">
                      <span>{insight.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{insight.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* More articles */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INSIGHTS.slice(3).map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group block">
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={insight.image} alt={insight.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="font-body text-xs font-semibold uppercase tracking-wider text-[oklch(0.65_0.1_73)]">{insight.category}</span>
                    <h3 className="font-heading text-lg font-semibold text-[oklch(0.16_0.055_253)] group-hover:text-[oklch(0.65_0.1_73)] transition-colors leading-snug mt-2 mb-2">{insight.title}</h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed line-clamp-2">{insight.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3 text-gray-400 font-body text-xs">
                        <span>{insight.date}</span>
                        <span className="flex items-center gap-1"><Clock size={11} />{insight.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[oklch(0.65_0.1_73)] font-body text-xs font-medium">
                        Read <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-[oklch(0.16_0.055_253)]">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Stay Ahead of What Matters
          </h2>
          <p className="font-body text-white/60 mb-8 max-w-xl mx-auto">
            Subscribe to our Insights newsletter and receive expert perspectives directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 font-body text-sm focus:outline-none focus:border-[oklch(0.65_0.1_73)] rounded-sm"
            />
            <button className="bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white px-6 py-3 font-body font-medium text-sm transition-colors rounded-sm whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
