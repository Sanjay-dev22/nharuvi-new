import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Nharuvi Global brings deep sector expertise across technology, healthcare, manufacturing, retail, real estate, and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Deep Expertise Across Every Major Sector"
        subtitle="We combine industry-specific knowledge with broad advisory capabilities to deliver advice that is genuinely relevant to your business context."
        image="/images/hero/hero-corporate-building.jpg"
        breadcrumbs={[{ label: "Industries" }]}
        eyebrow="Industries We Serve"
      />

      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our Sectors"
            title="Where We Create the Most Impact"
            subtitle="Every industry has its own rhythms, regulations, and challenges. Our sector specialists understand yours deeply."
            className="mb-16"
          />

          <div className="space-y-8">
            {INDUSTRIES.map((industry, i) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500`}>
                  <div className={`lg:col-span-4 relative h-56 lg:h-64 overflow-hidden ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="lg:col-span-8 p-8 flex flex-col justify-center">
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[oklch(0.16_0.055_253)] mb-3 group-hover:text-[oklch(0.26_0.07_253)] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="font-body text-gray-500 leading-relaxed mb-5">
                      {industry.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-[oklch(0.65_0.1_73)] font-body text-sm font-medium">
                      <span>Explore Sector</span>
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
