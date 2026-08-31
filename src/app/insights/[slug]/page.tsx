import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/home/ContactCTA";
import { INSIGHTS } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);
  if (!insight) return {};
  return { title: insight.title, description: insight.excerpt };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);
  if (!insight) notFound();

  const related = INSIGHTS.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={insight.title}
        subtitle={insight.excerpt}
        image={insight.image}
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: insight.category },
        ]}
        eyebrow={insight.category}
      />

      {/* Article */}
      <section className="section-padding bg-white">
        <div className="container-tight">
          {/* Meta */}
          <div className="flex items-center gap-6 mb-10 pb-6 border-b border-gray-100">
            <span className="bg-[oklch(0.65_0.1_73)] text-white text-xs font-body font-semibold px-3 py-1 uppercase tracking-wider">
              {insight.category}
            </span>
            <span className="font-body text-sm text-gray-400">{insight.date}</span>
            <span className="flex items-center gap-1.5 font-body text-sm text-gray-400">
              <Clock size={13} />{insight.readTime}
            </span>
          </div>

          {/* Body */}
          <div className="prose prose-lg max-w-none font-body text-gray-600">
            <p className="text-xl leading-relaxed text-gray-700 mb-8">{insight.excerpt}</p>

            <h2 className="font-heading text-2xl font-semibold text-[oklch(0.16_0.055_253)] mb-4 mt-10">
              The Evolving Landscape
            </h2>
            <p className="leading-relaxed mb-6">
              The professional and regulatory environment is evolving at a pace that demands constant vigilance from business leaders. Those who stay ahead of these changes — proactively adapting their strategies, structures, and processes — will be best positioned to capture the opportunities that emerge.
            </p>
            <p className="leading-relaxed mb-6">
              At Nharuvi Global, our specialists work closely with clients to monitor relevant developments and translate complex requirements into practical, actionable guidance. Our approach is not just to keep you compliant — it is to help you turn regulatory change into competitive advantage.
            </p>

            <div className="my-10 bg-[oklch(0.975_0_0)] border-l-4 border-[oklch(0.65_0.1_73)] p-8">
              <blockquote className="font-heading text-xl text-[oklch(0.16_0.055_253)] font-medium leading-relaxed italic">
                &ldquo;The businesses that will thrive are those that treat these challenges not as compliance burdens, but as opportunities to build more resilient, transparent, and well-governed organisations.&rdquo;
              </blockquote>
              <footer className="font-body text-sm text-gray-500 mt-3 not-italic">
                — Nharuvi Global Advisory Team
              </footer>
            </div>

            <h2 className="font-heading text-2xl font-semibold text-[oklch(0.16_0.055_253)] mb-4 mt-10">
              Key Considerations for Business Leaders
            </h2>
            <p className="leading-relaxed mb-4">
              Business leaders should focus on three core areas as they navigate the current environment:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex gap-3">
                <span className="text-[oklch(0.65_0.1_73)] font-semibold shrink-0">01.</span>
                <span>Ensuring your financial and compliance infrastructure is fit for purpose and can scale with your business ambitions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[oklch(0.65_0.1_73)] font-semibold shrink-0">02.</span>
                <span>Building teams and advisors who bring both technical depth and strategic perspective to the table.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[oklch(0.65_0.1_73)] font-semibold shrink-0">03.</span>
                <span>Investing in the data and technology infrastructure that enables real-time visibility and informed decision-making.</span>
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-[oklch(0.16_0.055_253)] mb-4 mt-10">
              How We Can Help
            </h2>
            <p className="leading-relaxed mb-4">
              Nharuvi Global brings together specialists across every dimension of professional services — from tax and audit to digital transformation and CFO advisory — to provide the integrated support your business needs.
            </p>
            <p className="leading-relaxed mb-6">
              Whether you are navigating immediate compliance requirements or building the long-term capabilities your business needs to compete at the highest level, our team is ready to partner with you.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <div className="bg-[oklch(0.16_0.055_253)] p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-heading text-xl font-semibold text-white mb-1">
                  Speak with a Specialist
                </h3>
                <p className="font-body text-sm text-white/60">
                  Discuss how this topic affects your business with one of our experts.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white px-6 py-3 font-body font-medium text-sm transition-colors rounded-sm group"
              >
                Get in Touch
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[oklch(0.16_0.055_253)] font-body text-sm transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Insights
            </Link>
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <h2 className="font-heading text-3xl font-semibold text-[oklch(0.16_0.055_253)] mb-10">
            Related Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={`/insights/${r.slug}`} className="group block">
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={r.image} alt={r.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                  </div>
                  <div className="p-5">
                    <span className="font-body text-xs font-semibold uppercase tracking-wider text-[oklch(0.65_0.1_73)]">{r.category}</span>
                    <h4 className="font-heading text-base font-semibold text-[oklch(0.16_0.055_253)] group-hover:text-[oklch(0.65_0.1_73)] transition-colors mt-1 leading-snug">{r.title}</h4>
                    <div className="mt-2 flex items-center gap-1 text-[oklch(0.65_0.1_73)] font-body text-xs font-medium">
                      Read More <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
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
