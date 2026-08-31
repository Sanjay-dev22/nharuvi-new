import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Nharuvi Global Private Limited — a forward-thinking accounting and consulting firm delivering precise, transparent, and client-centric financial solutions.",
};

const VALUES = [
  {
    title: "Transparency in Every Engagement",
    description:
      "Our clients deserve full clarity — in our work processes, pricing, deliverables, and outcomes. We do not hide behind jargon or ambiguity.",
  },
  {
    title: "Accuracy & Professional Excellence",
    description:
      "Every deliverable we produce is reviewed carefully for accuracy, compliance, and clarity. Precision is not optional — it is the foundation of everything we do.",
  },
  {
    title: "Confidentiality & Data Protection",
    description:
      "Client information is handled with strict security and ethical standards. We treat every engagement with the discretion it deserves.",
  },
  {
    title: "Value-Driven Service Delivery",
    description:
      "Our work is strategic, thorough, and worth your investment. We focus on delivering real, tangible value — not volume for its own sake.",
  },
  {
    title: "Timeliness & Clear Communication",
    description:
      "Deadlines matter. Communication should be proactive, professional, and clear. We keep you informed at every stage of the engagement.",
  },
  {
    title: "Client-Centric Commitment",
    description:
      "Every client receives thoughtful, consistent, and personalised attention. Your goals become our responsibility to support with care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A Firm Built on Precision and Trust"
        subtitle="Nharuvi Global Private Limited delivers accounting, compliance, and advisory services with clarity, accuracy, and genuine commitment to every client."
        image="/images/hero/hero-corporate-building.jpg"
        breadcrumbs={[{ label: "About" }]}
        eyebrow="About Nharuvi Global"
      />

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="Precise. Transparent. Client-Centric."
                subtitle="Nharuvi Global Private Limited is a forward-thinking accounting and consulting firm dedicated to delivering precise, transparent, and client-centric financial solutions for businesses operating locally and globally."
              />
              <p className="font-body text-gray-500 text-base leading-relaxed mt-6">
                We blend professional excellence with intelligent automation to support organisations in financial reporting, tax compliance, payroll, bookkeeping, and strategic financial advisory.
              </p>
              <p className="font-body text-gray-500 text-base leading-relaxed mt-4">
                Our team brings together Certified Public Accountants, Chartered Accountants, CFAs, Company Secretaries, and technology specialists — giving clients access to integrated expertise across accounting, tax, compliance, and advisory in one place.
              </p>
              <p className="font-body text-gray-500 text-base leading-relaxed mt-4">
                We emphasise accuracy, confidentiality, timely delivery, and informed decision-making — because our clients&apos; trust is something we earn through consistent, quality work, not marketing promises.
              </p>
            </div>
            <div className="relative h-[480px]">
              <div className="absolute top-0 left-0 w-[75%] h-[75%] overflow-hidden rounded-sm shadow-xl">
                <Image
                  src="/images/culture/culture-team-meeting.jpg"
                  alt="Nharuvi Global team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[55%] h-[50%] overflow-hidden rounded-sm shadow-lg border-4 border-white">
                <Image
                  src="/images/services/service-consulting-hero.jpg"
                  alt="Professional consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              {/* Gold accent */}
              <div className="absolute top-8 -left-4 w-2 h-32 bg-[oklch(0.65_0.1_73)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <SectionHeader eyebrow="Our Story" title="Why We Started" />
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="font-body text-gray-600 text-lg leading-relaxed">
                Nharuvi Global was founded on a straightforward belief: businesses deserve financial partners who are genuinely precise, genuinely transparent, and genuinely invested in their success — not firms that treat compliance as a checkbox exercise.
              </p>
              <p className="font-body text-gray-500 leading-relaxed">
                We observed that many businesses — particularly growing SMEs and mid-market companies — were underserved by firms that lacked the right combination of technical depth, technology capability, and personal service. We built Nharuvi Global to fill that gap.
              </p>
              <p className="font-body text-gray-500 leading-relaxed">
                Today, our multi-disciplinary team serves clients across accounting, tax, audit, compliance, corporate secretarial, and financial advisory — bringing specialist knowledge to every engagement with the consistency and care that our clients have come to rely on.
              </p>

              <div className="relative h-64 overflow-hidden rounded-sm mt-8">
                <Image
                  src="/images/hero/hero-finance-strategy.jpg"
                  alt="Professional services in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-[oklch(0.16_0.055_253)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-10 rounded-sm">
              <div className="w-12 h-1 bg-[oklch(0.65_0.1_73)] mb-6" />
              <h3 className="font-heading text-3xl font-semibold text-white mb-5">Our Vision</h3>
              <p className="font-body text-white/65 leading-relaxed text-lg">
                To be the most trusted accounting and advisory partner for businesses seeking precision, transparency, and genuine expertise — a firm that clients return to with confidence at every stage of their growth.
              </p>
            </div>
            <div className="bg-[oklch(0.65_0.1_73)] p-10 rounded-sm">
              <div className="w-12 h-1 bg-white/50 mb-6" />
              <h3 className="font-heading text-3xl font-semibold text-white mb-5">Our Mission</h3>
              <p className="font-body text-white/85 leading-relaxed text-lg">
                To deliver precise, transparent, and client-centric financial solutions — combining professional excellence, intelligent automation, and consistent communication to help businesses operate with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our Values"
            title="What We Stand For"
            subtitle="Our values define how we work — with every client, on every engagement, every day."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className="border border-gray-100 hover:border-[oklch(0.65_0.1_73)] p-8 rounded-sm transition-all duration-300 group"
              >
                <div className="font-heading text-5xl font-semibold text-[oklch(0.65_0.1_73)]/15 group-hover:text-[oklch(0.65_0.1_73)]/35 transition-colors mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-heading text-lg font-semibold text-[oklch(0.16_0.055_253)] mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our People teaser */}
      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-80">
              <Image
                src="/images/culture/culture-team-collaboration.jpg"
                alt="Our professional team"
                fill
                className="object-cover rounded-sm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeader
                eyebrow="Our People"
                title="The Professionals Behind Every Engagement"
                subtitle="Our team of CPAs, Chartered Accountants, CFAs, Company Secretaries, and technology specialists brings the depth and breadth your business needs."
              />
              <Link
                href="/people"
                className="mt-8 inline-flex items-center gap-3 bg-[oklch(0.16_0.055_253)] hover:bg-[oklch(0.22_0.07_253)] text-white px-7 py-3.5 font-body font-medium text-sm tracking-wide transition-colors group"
              >
                Meet Our People
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our Offices"
            title="Where to Find Us"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[oklch(0.975_0_0)] p-8 rounded-sm border border-gray-100">
              <div className="w-8 h-1 bg-[oklch(0.65_0.1_73)] mb-5" />
              <div className="font-body text-xs text-[oklch(0.65_0.1_73)] uppercase tracking-widest font-semibold mb-3">
                Primary Office
              </div>
              <h3 className="font-heading text-xl font-semibold text-[oklch(0.16_0.055_253)] mb-3">
                Bengaluru, Karnataka
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                OMBR Layout Main Road, Hi Tech Building<br />
                Bengaluru East, Karnataka 560043, India
              </p>
              <a
                href="tel:+918056995508"
                className="font-body text-sm text-[oklch(0.65_0.1_73)] font-medium hover:text-[oklch(0.16_0.055_253)] transition-colors"
              >
                +91 80569 95508
              </a>
              <div className="mt-5">
                <a
                  href="https://maps.app.goo.gl/Shhs28XN1FvBQ4yS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs text-gray-400 hover:text-[oklch(0.16_0.055_253)] transition-colors"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
            <div className="bg-[oklch(0.975_0_0)] p-8 rounded-sm border border-gray-100">
              <div className="w-8 h-1 bg-[oklch(0.65_0.1_73)] mb-5" />
              <div className="font-body text-xs text-[oklch(0.65_0.1_73)] uppercase tracking-widest font-semibold mb-3">
                Branch Office
              </div>
              <h3 className="font-heading text-xl font-semibold text-[oklch(0.16_0.055_253)] mb-3">
                Thrissur, Kerala
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
                Areepurath House, Puthenchira PO<br />
                Pindani, Thrissur, Kerala – 680682, India
              </p>
              <a
                href="tel:+918138086074"
                className="font-body text-sm text-[oklch(0.65_0.1_73)] font-medium hover:text-[oklch(0.16_0.055_253)] transition-colors"
              >
                +91 81380 86074
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
