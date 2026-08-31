import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Nharuvi Global's comprehensive suite of professional services — from accounting and tax advisory to digital transformation and CFO advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Integrated Expertise Across Every Business Need"
        subtitle="From day-to-day financial management to long-term strategic transformation — we bring the full spectrum of expertise your business requires."
        image="/images/hero/hero-cfo-advisory.jpg"
        breadcrumbs={[{ label: "Services" }]}
        eyebrow="Our Services"
      />

      {/* Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10+", label: "Service Lines" },
              { value: "500+", label: "Clients Served" },
              { value: "20+", label: "Years of Experience" },
              { value: "15+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl font-semibold text-[oklch(0.16_0.055_253)]">{stat.value}</div>
                <div className="font-body text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="What We Offer"
            title="A Complete Suite of Professional Services"
            subtitle="Our services are designed to work together — giving you a seamlessly integrated partnership rather than disconnected point solutions."
            className="mb-16"
          />

          <div className="space-y-6">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image */}
                  <div className={`lg:col-span-4 relative h-56 lg:h-64 overflow-hidden ${i % 2 === 1 ? "lg:order-last" : ""}`}>
                    <Image
                      src={service.cardImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-[oklch(0.65_0.1_73)] text-white text-xs font-body font-semibold px-3 py-1 uppercase tracking-wider">
                        {service.shortTitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 p-8 flex flex-col justify-center">
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-[oklch(0.16_0.055_253)] mb-3 group-hover:text-[oklch(0.26_0.07_253)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-gray-500 leading-relaxed mb-5">{service.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.slice(0, 4).map((f) => (
                        <span
                          key={f}
                          className="font-body text-xs px-3 py-1.5 bg-[oklch(0.975_0_0)] text-gray-500 rounded-sm border border-gray-100"
                        >
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[oklch(0.65_0.1_73)] font-body text-sm font-medium">
                      <span>Explore Service</span>
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
