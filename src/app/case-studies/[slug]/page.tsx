import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";
import { CASE_STUDIES } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.challenge };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const related = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        title={cs.title}
        subtitle={`${cs.industry} Sector`}
        image={cs.image}
        breadcrumbs={[
          { label: "Case Studies", href: "/case-studies" },
          { label: cs.title },
        ]}
        eyebrow="Client Success"
      />

      {/* Metrics bar */}
      <section className="py-0 bg-[oklch(0.16_0.055_253)]">
        <div className="container-wide">
          <div className="grid grid-cols-3 divide-x divide-white/10 py-10">
            {cs.results.map((r) => (
              <div key={r.label} className="px-8 text-center">
                <div className="font-heading text-4xl md:text-5xl font-semibold text-[oklch(0.65_0.1_73)]">{r.metric}</div>
                <div className="font-body text-sm text-white/50 uppercase tracking-wider mt-2">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              {/* Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[oklch(0.65_0.1_73)]" />
                  <span className="font-body text-xs uppercase tracking-widest text-[oklch(0.65_0.1_73)] font-semibold">The Challenge</span>
                </div>
                <p className="font-body text-gray-600 text-lg leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Visual break */}
              <div className="relative h-64 overflow-hidden rounded-sm">
                <Image src={cs.image} alt={cs.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
              </div>

              {/* Approach */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-[oklch(0.65_0.1_73)]" />
                  <span className="font-body text-xs uppercase tracking-widest text-[oklch(0.65_0.1_73)] font-semibold">Our Approach</span>
                </div>
                <p className="font-body text-gray-600 text-lg leading-relaxed">{cs.approach}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[oklch(0.975_0_0)] p-7 rounded-sm">
                <h4 className="font-heading text-lg font-semibold text-[oklch(0.16_0.055_253)] mb-5">Engagement Overview</h4>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-gray-400 mb-1">Industry</dt>
                    <dd className="font-body text-sm font-medium text-gray-700">{cs.industry}</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-wider text-gray-400 mb-1">Services Delivered</dt>
                    <dd className="font-body text-sm font-medium text-gray-700">Advisory, Strategy, Implementation</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[oklch(0.16_0.055_253)] p-7 rounded-sm">
                <p className="font-body text-white/70 text-sm leading-relaxed mb-5">
                  Want to achieve similar results? Let&apos;s discuss how we can help your business.
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white py-3 font-body font-medium text-sm transition-colors rounded-sm"
                >
                  Start the Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding bg-[oklch(0.975_0_0)]">
          <div className="container-wide">
            <SectionHeader eyebrow="More Success Stories" title="Related Case Studies" className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/case-studies/${r.slug}`} className="group block">
                  <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 flex">
                    <div className="relative w-40 shrink-0 overflow-hidden">
                      <Image src={r.image} alt={r.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="160px" />
                    </div>
                    <div className="p-5">
                      <span className="font-body text-xs font-semibold uppercase tracking-wider text-[oklch(0.65_0.1_73)]">{r.industry}</span>
                      <h4 className="font-heading text-base font-semibold text-[oklch(0.16_0.055_253)] mt-1 mb-2 group-hover:text-[oklch(0.65_0.1_73)] transition-colors leading-snug">{r.title}</h4>
                      <div className="flex items-center gap-1.5 text-[oklch(0.65_0.1_73)] font-body text-xs font-medium">
                        Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
