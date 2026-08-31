import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";
import { SERVICES } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={service.title}
        subtitle={service.tagline}
        image={service.image}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        eyebrow="Our Services"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow={service.shortTitle}
                title={`${service.title} Services`}
              />
              <p className="font-body text-gray-500 text-lg leading-relaxed mt-6 mb-8">
                {service.longDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[oklch(0.16_0.055_253)] hover:bg-[oklch(0.22_0.07_253)] text-white px-7 py-3.5 font-body font-medium text-sm tracking-wide transition-colors group"
              >
                Discuss Your Needs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[oklch(0.975_0_0)] p-8 rounded-sm">
                <h3 className="font-heading text-xl font-semibold text-[oklch(0.16_0.055_253)] mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3 items-start">
                      <CheckCircle size={18} className="text-[oklch(0.65_0.1_73)] shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="font-body text-sm text-gray-500 mb-4">
                    Ready to get started? Speak with a specialist today.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white py-3 font-body font-medium text-sm transition-colors rounded-sm"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual section */}
      <section className="py-0">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.16_0.055_253)]/80 to-[oklch(0.16_0.055_253)]/40" />
          <div className="relative z-10 h-full flex items-center container-wide">
            <blockquote className="max-w-2xl">
              <p className="font-heading text-2xl md:text-3xl text-white font-medium leading-relaxed italic">
                &ldquo;Our {service.title.toLowerCase()} specialists bring deep expertise and a practical, client-focused approach to every engagement.&rdquo;
              </p>
              <footer className="mt-4 font-body text-sm text-[oklch(0.65_0.1_73)] uppercase tracking-wider">
                — Nharuvi Global {service.shortTitle} Practice
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Related Services"
            title="You May Also Be Interested In"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group block">
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={s.cardImage}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-heading text-lg font-semibold text-[oklch(0.16_0.055_253)] mb-1 group-hover:text-[oklch(0.65_0.1_73)] transition-colors">
                      {s.title}
                    </h4>
                    <p className="font-body text-sm text-gray-500">{s.tagline}</p>
                    <div className="mt-3 flex items-center gap-1.5 text-[oklch(0.65_0.1_73)] font-body text-sm font-medium">
                      Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
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
