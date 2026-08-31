import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";
import { INDUSTRIES, SERVICES } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: industry.title,
    description: industry.shortDescription,
  };
}

const INDUSTRY_DETAILS: Record<string, { challenges: string[]; services: string[]; approach: string }> = {
  "technology-it": {
    challenges: ["Rapid scaling of finance functions", "Equity compensation complexity", "R&D tax credits", "Multi-jurisdiction compliance", "Investor reporting"],
    services: ["CFO Advisory", "Tax Advisory", "Audit & Assurance", "Digital Transformation"],
    approach: "We understand the pace at which technology businesses operate. Our tech practice combines financial rigour with the agility that fast-scaling companies need.",
  },
  "healthcare": {
    challenges: ["Complex regulatory environment", "Revenue cycle management", "Capital requirements", "Clinical governance", "Reimbursement optimization"],
    services: ["Accounting & Bookkeeping", "Compliance Services", "Audit & Assurance", "Risk Advisory"],
    approach: "Healthcare demands precision in financial management and absolute compliance. Our specialists understand the sector's unique financial and regulatory landscape.",
  },
  "manufacturing": {
    challenges: ["Cost of production analysis", "Supply chain optimization", "Transfer pricing", "Capital expenditure planning", "Working capital management"],
    services: ["Tax Advisory", "Corporate Finance", "Process Optimization", "Risk Advisory"],
    approach: "Manufacturing businesses require granular cost management and efficient capital allocation. We help manufacturers optimize their financial and operational performance.",
  },
  "retail-ecommerce": {
    challenges: ["Inventory management", "Multi-channel revenue recognition", "VAT/GST compliance", "Cash flow management", "Platform fee analysis"],
    services: ["Accounting & Bookkeeping", "Tax Advisory", "Business Consulting", "Digital Transformation"],
    approach: "Retail moves at the speed of consumer behaviour. We help retailers build the financial infrastructure to support profitable growth across all channels.",
  },
  "real-estate": {
    challenges: ["Complex transaction structures", "REIT compliance", "Lease accounting", "Development project finance", "Property valuation"],
    services: ["Tax Advisory", "Corporate Finance", "Audit & Assurance", "Compliance Services"],
    approach: "Real estate transactions are complex and high-stakes. Our property specialists navigate the financial and regulatory complexities so you can focus on building your portfolio.",
  },
  "hospitality-tourism": {
    challenges: ["Seasonal cash flow management", "Franchise accounting", "Revenue per available room optimization", "Food & beverage costing", "Tourism levy compliance"],
    services: ["Accounting & Bookkeeping", "Business Consulting", "Tax Advisory", "Process Optimization"],
    approach: "Hospitality is a relationship-driven industry where margins are tight and operational excellence is paramount. We help hospitality businesses maximize profitability.",
  },
  "financial-services": {
    challenges: ["Regulatory capital requirements", "AML/KYC compliance", "IFRS 9 provisioning", "Stress testing", "Regulatory reporting"],
    services: ["Compliance Services", "Risk Advisory", "Audit & Assurance", "Tax Advisory"],
    approach: "Financial services businesses operate under intense regulatory scrutiny. Our specialists have deep knowledge of financial sector regulations and reporting requirements.",
  },
  "logistics-supply-chain": {
    challenges: ["Customs and import duties", "Fuel cost management", "Asset financing", "Cross-border compliance", "Supply chain risk"],
    services: ["Tax Advisory", "Risk Advisory", "Process Optimization", "Business Consulting"],
    approach: "Logistics businesses require tight financial management and compliance expertise across multiple jurisdictions. We help logistics companies optimize operations and reduce costs.",
  },
  "education": {
    challenges: ["Fee income management", "Grant compliance", "Endowment management", "Capital project funding", "Government reporting"],
    services: ["Accounting & Bookkeeping", "Audit & Assurance", "Compliance Services", "CFO Advisory"],
    approach: "Educational institutions have unique financial structures and governance requirements. We help education sector clients maintain financial health and regulatory compliance.",
  },
  "startups": {
    challenges: ["Equity structuring", "Investor-ready financials", "R&D tax credits", "Grant applications", "Scaling financial operations"],
    services: ["CFO Advisory", "Accounting & Bookkeeping", "Tax Advisory", "Corporate Finance"],
    approach: "Startups need financial partners who can move at startup speed without compromising quality. We build the financial foundations that help startups scale with confidence.",
  },
};

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);
  if (!industry) notFound();

  const details = INDUSTRY_DETAILS[slug] ?? {
    challenges: ["Financial management", "Compliance", "Tax planning", "Risk management", "Strategic advisory"],
    services: ["Accounting & Bookkeeping", "Tax Advisory", "Audit & Assurance", "Business Consulting"],
    approach: "We bring deep sector expertise and integrated advisory capabilities to help businesses in this industry achieve their goals.",
  };

  const relatedServices = SERVICES.filter((s) => details.services.includes(s.title)).slice(0, 3);

  return (
    <>
      <PageHero
        title={industry.title}
        subtitle={industry.shortDescription}
        image={industry.image}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
        eyebrow="Industry Expertise"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <SectionHeader eyebrow={industry.title} title="How We Support Your Industry" />
              <p className="font-body text-gray-500 text-lg leading-relaxed mt-6 mb-8">
                {details.approach}
              </p>

              <h4 className="font-heading text-xl font-semibold text-[oklch(0.16_0.055_253)] mb-4">
                Key Challenges We Address
              </h4>
              <ul className="space-y-3">
                {details.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3 items-start">
                    <CheckCircle size={18} className="text-[oklch(0.65_0.1_73)] shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-gray-600">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-72 overflow-hidden rounded-sm">
                <Image
                  src={industry.cardImage}
                  alt={industry.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
              <div className="bg-[oklch(0.16_0.055_253)] p-7 rounded-sm">
                <h4 className="font-heading text-lg font-semibold text-white mb-4">
                  Services for {industry.title.split("&")[0].trim()}
                </h4>
                <ul className="space-y-2">
                  {details.services.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-white/60 font-body text-sm">
                      <div className="w-1 h-1 rounded-full bg-[oklch(0.65_0.1_73)]" />
                      {s}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 block text-center bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white py-3 font-body font-medium text-sm transition-colors rounded-sm"
                >
                  Speak with a Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section-padding bg-[oklch(0.975_0_0)]">
          <div className="container-wide">
            <SectionHeader
              eyebrow="Relevant Services"
              title="How We Can Help"
              className="mb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group block">
                  <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={s.cardImage} alt={s.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-heading text-lg font-semibold text-[oklch(0.16_0.055_253)] mb-1 group-hover:text-[oklch(0.65_0.1_73)] transition-colors">{s.title}</h4>
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
      )}

      <ContactCTA />
    </>
  );
}
