import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";
import ContactCTA from "@/components/home/ContactCTA";
import { PEOPLE } from "@/lib/data";
import PersonAvatar from "@/components/shared/PersonAvatar";

export const metadata: Metadata = {
  title: "Our People",
  description:
    "Meet the Nharuvi Global team — CPAs, Chartered Accountants, CFAs, Company Secretaries, and technology specialists dedicated to delivering precise, client-centric financial services.",
};

const DEPARTMENTS = ["All", "Accounting & Financial Reporting", "Tax & Compliance", "Financial Advisory", "Audit & Compliance", "Technology", "Client Delivery", "Legal & Compliance", "International Tax"];

export default function PeoplePage() {
  return (
    <>
      <PageHero
        title="The People Behind the Work"
        subtitle="A multidisciplinary team of qualified professionals dedicated to delivering precise, transparent, and client-centric financial services."
        image="/images/culture/culture-team-meeting.jpg"
        breadcrumbs={[{ label: "Our People" }]}
        eyebrow="Our Team"
      />

      {/* Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="Qualified. Experienced. Committed."
                subtitle="Our team brings together diverse professional qualifications and complementary expertise — from accounting and tax to corporate secretarial and technology — all working in service of your business goals."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "CPAs & CAs", value: "4" },
                { label: "Specialist Designations", value: "6" },
                { label: "Service Disciplines", value: "8" },
                { label: "Office Locations", value: "2" },
              ].map((item) => (
                <div key={item.label} className="bg-[oklch(0.975_0_0)] p-6 rounded-sm">
                  <div className="font-heading text-3xl font-semibold text-[oklch(0.65_0.1_73)]">{item.value}</div>
                  <div className="font-body text-xs text-gray-400 uppercase tracking-wider mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Meet the Team"
            title="Our Professionals"
            className="mb-12"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PEOPLE.map((person) => (
              <Link key={person.slug} href={`/people/${person.slug}`} className="group block">
                <div className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                      />
                    ) : (
                      <PersonAvatar name={person.name} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.055_253)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 inset-x-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span className="inline-flex items-center gap-1.5 font-body text-xs text-white font-medium">
                        View Profile <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="w-5 h-0.5 bg-[oklch(0.65_0.1_73)] mb-2" />
                    <div className="font-heading text-base font-semibold text-[oklch(0.16_0.055_253)] group-hover:text-[oklch(0.65_0.1_73)] transition-colors leading-tight">
                      {person.name}
                      {person.designation && (
                        <span className="font-body text-[11px] text-[oklch(0.65_0.1_73)] font-normal ml-1.5">
                          {person.designation}
                        </span>
                      )}
                    </div>
                    <div className="font-body text-xs text-gray-400 mt-0.5 leading-tight line-clamp-1">{person.role}</div>
                    <div className="font-body text-[10px] text-gray-300 mt-0.5 uppercase tracking-wider line-clamp-1">{person.department}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Culture block */}
      <section className="section-padding bg-[oklch(0.16_0.055_253)]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-[oklch(0.65_0.1_73)]" />
                <span className="text-[oklch(0.65_0.1_73)] font-body text-xs uppercase tracking-[0.2em] font-semibold">
                  Our Culture
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
                A Culture Built on Integrity and Precision
              </h2>
              <p className="font-body text-white/60 leading-relaxed mb-6">
                At Nharuvi Global, every team member is selected not just for their technical qualifications but for their commitment to accuracy, confidentiality, and client service. We hold ourselves to the same high standards we expect from our deliverables.
              </p>
              <p className="font-body text-white/60 leading-relaxed mb-8">
                Our team is encouraged to stay current, deepen their specialisations, and bring fresh thinking to client challenges — because our clients deserve advice that is both technically sound and genuinely relevant.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-3 bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white px-7 py-3.5 font-body font-medium text-sm tracking-wide transition-colors group"
              >
                Join Our Team
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "/images/culture/culture-team-collaboration.jpg",
                "/images/culture/culture-office.jpg",
                "/images/culture/culture-learning.jpg",
                "/images/culture/culture-collaboration.jpg",
              ].map((src, i) => (
                <div key={i} className="relative h-40 overflow-hidden rounded-sm">
                  <Image src={src} alt="Team at work" fill className="object-cover" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
