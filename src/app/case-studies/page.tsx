import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";
import { CASE_STUDIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore how Nharuvi Global has helped businesses across industries achieve measurable results through expert advisory and professional services.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Stories of Meaningful Impact"
        subtitle="From startup financing to enterprise transformation — every engagement tells a story of challenge met, strategy executed, and results delivered."
        image="/images/hero/hero-finance-strategy.jpg"
        breadcrumbs={[{ label: "Case Studies" }]}
        eyebrow="Client Success"
      />

      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Case Studies"
            title="Results That Speak for Themselves"
            subtitle="We measure our success by the outcomes we drive for our clients — not the hours we bill."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <Link key={cs.slug} href={`/case-studies/${cs.slug}`} className="group block h-full">
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
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
                      <span className="bg-[oklch(0.65_0.1_73)] text-white text-xs font-body font-semibold px-3 py-1 uppercase tracking-wider">
                        {cs.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="font-heading text-xl font-semibold text-[oklch(0.16_0.055_253)] mb-3 group-hover:text-[oklch(0.26_0.07_253)] transition-colors leading-tight">
                      {cs.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">
                      {cs.challenge}
                    </p>

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
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
