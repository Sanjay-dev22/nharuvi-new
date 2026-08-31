import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, ChevronRight } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Nharuvi Global and build an extraordinary career in professional services. Explore current opportunities and discover life at our firm.",
};

const OPENINGS = [
  { title: "Senior Tax Consultant", dept: "Tax Advisory", location: "Bengaluru, Karnataka", type: "Full-time", level: "Senior" },
  { title: "Audit Manager", dept: "Audit & Assurance", location: "Bengaluru, Karnataka", type: "Full-time", level: "Manager" },
  { title: "CFO Advisory Associate", dept: "CFO Advisory", location: "Bengaluru / Hybrid", type: "Full-time", level: "Associate" },
  { title: "Risk Advisory Consultant", dept: "Risk Advisory", location: "Bengaluru, Karnataka", type: "Full-time", level: "Consultant" },
  { title: "Digital Transformation Analyst", dept: "Digital Transformation", location: "Remote", type: "Full-time", level: "Analyst" },
  { title: "Corporate Finance Associate", dept: "Corporate Finance", location: "Bengaluru, Karnataka", type: "Full-time", level: "Associate" },
];

const TESTIMONIALS = [
  {
    quote: "Joining Nharuvi Global was the best career decision I ever made. The calibre of clients, the quality of the work, and the investment in my professional growth have been exceptional.",
    name: "Pooja R.",
    role: "Senior Consultant, Tax Advisory",
    image: "/images/careers/testimonial-pooja.jpg",
  },
  {
    quote: "I have been given real responsibility from day one. The culture here genuinely values fresh perspectives and rewards results — it is exactly the kind of environment I was looking for.",
    name: "Arul S.",
    role: "Associate, Audit & Assurance",
    image: "/images/careers/testimonial-arul.jpg",
  },
  {
    quote: "The mentorship I have received here has accelerated my development faster than I thought possible. I am proud to work somewhere that truly invests in its people.",
    name: "Husna K.",
    role: "Manager, Accounting & Financial Reporting",
    image: "/images/careers/testimonial-husna.jpg",
  },
];

const PROCESS = [
  { step: "01", title: "Apply Online", desc: "Submit your CV and a covering letter through our careers portal." },
  { step: "02", title: "Initial Screening", desc: "Our talent team will review your application and reach out within 5 business days." },
  { step: "03", title: "Partner Interview", desc: "A structured conversation with a senior team member to explore your experience and aspirations." },
  { step: "04", title: "Technical Assessment", desc: "A practical exercise designed to showcase your skills in a realistic context." },
  { step: "05", title: "Final Interview", desc: "A conversation with practice leadership to ensure the right fit for both parties." },
  { step: "06", title: "Offer & Onboarding", desc: "A competitive offer followed by a structured onboarding program to set you up for success." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Build Something Extraordinary With Us"
        subtitle="Join a firm where talented people do meaningful work. We invest in your growth, celebrate your success, and challenge you every day."
        image="/images/culture/culture-collaboration.jpg"
        breadcrumbs={[{ label: "Careers" }]}
        eyebrow="Careers at Nharuvi Global"
      />

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionHeader
              eyebrow="Why Join Us"
              title="A Place Where Careers Are Built, Not Just Jobs Filled"
              subtitle="At Nharuvi Global, you will work on complex, meaningful challenges for leading organisations. You will be mentored by the best in the business and given the responsibility to make a real impact from the start of your career."
            />
            <div className="grid grid-cols-2 gap-4">
              {[
                { img: "/images/culture/culture-team-collaboration.jpg", alt: "Team meeting" },
                { img: "/images/culture/culture-office.jpg", alt: "Office collaboration" },
                { img: "/images/culture/culture-team-meeting.jpg", alt: "Executive meeting" },
                { img: "/images/industries/industry-startups-hero.jpg", alt: "Work culture" },
              ].map((img, i) => (
                <div key={i} className="relative h-40 overflow-hidden rounded-sm">
                  <Image src={img.img} alt={img.alt} fill className="object-cover" sizes="25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at Nharuvi */}
      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Life at Nharuvi"
            title="Culture That Empowers You to Thrive"
            subtitle="We believe the best work happens when people feel valued, challenged, and supported."
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Collaborative Environment",
                desc: "We work as one team across service lines and geographies. Collaboration is how we solve the hardest problems.",
                img: "/images/culture/culture-collaboration.jpg",
              },
              {
                title: "Continuous Learning",
                desc: "Structured learning paths, professional certifications, and exposure to best-in-class client work keep you growing.",
                img: "/images/culture/culture-learning.jpg",
              },
              {
                title: "Real Responsibility",
                desc: "You will not spend years waiting for a chance to make an impact. We give you real work with real consequences from day one.",
                img: "/images/hero/hero-cfo-advisory.jpg",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-sm overflow-hidden shadow-sm group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.img} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="33vw" />
                </div>
                <div className="p-6">
                  <div className="w-8 h-0.5 bg-[oklch(0.65_0.1_73)] mb-3" />
                  <h3 className="font-heading text-xl font-semibold text-[oklch(0.16_0.055_253)] mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Current Openings"
            title="Find Your Next Role"
            subtitle="We are always looking for exceptional people. Browse our current openings below."
            className="mb-12"
          />
          <div className="space-y-3">
            {OPENINGS.map((opening) => (
              <div
                key={opening.title}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[oklch(0.975_0_0)] hover:bg-[oklch(0.16_0.055_253)] p-6 rounded-sm transition-all duration-300 cursor-pointer"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[oklch(0.16_0.055_253)] group-hover:text-white transition-colors">
                    {opening.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <span className="font-body text-xs text-gray-400 group-hover:text-white/50 transition-colors">{opening.dept}</span>
                    <span className="flex items-center gap-1 font-body text-xs text-gray-400 group-hover:text-white/50 transition-colors">
                      <MapPin size={11} /> {opening.location}
                    </span>
                    <span className="flex items-center gap-1 font-body text-xs text-gray-400 group-hover:text-white/50 transition-colors">
                      <Clock size={11} /> {opening.type}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="font-body text-xs px-3 py-1 bg-white group-hover:bg-white/10 text-gray-500 group-hover:text-white/70 border border-gray-200 group-hover:border-white/20 rounded-sm transition-all">
                    {opening.level}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[oklch(0.65_0.1_73)] group-hover:bg-[oklch(0.65_0.1_73)] flex items-center justify-center transition-all">
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[oklch(0.16_0.055_253)] font-body text-sm font-medium border-b border-[oklch(0.65_0.1_73)] pb-0.5 hover:text-[oklch(0.65_0.1_73)] transition-colors"
            >
              Don&apos;t see a fit? Send us a speculative application <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="section-padding bg-[oklch(0.16_0.055_253)]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our Process"
            title="What to Expect"
            subtitle="A transparent, respectful process designed to find the right fit for everyone."
            light
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROCESS.map((step) => (
              <div key={step.step} className="bg-white/5 border border-white/10 p-7 rounded-sm">
                <div className="font-heading text-4xl font-semibold text-[oklch(0.65_0.1_73)]/40 mb-4">{step.step}</div>
                <h4 className="font-heading text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="font-body text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="section-padding bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our People"
            title="Voices From the Team"
            align="center"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-sm shadow-sm">
                <div className="text-[oklch(0.65_0.1_73)] font-heading text-5xl leading-none mb-4">&ldquo;</div>
                <p className="font-body text-gray-600 leading-relaxed italic mb-6">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <div className="font-heading text-base font-semibold text-[oklch(0.16_0.055_253)]">{t.name}</div>
                    <div className="font-body text-xs text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.65_0.1_73)]">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="font-body text-white/70 mb-8 max-w-xl mx-auto">
            Explore current openings and start your journey with Nharuvi Global today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[oklch(0.16_0.055_253)] px-8 py-4 font-body font-semibold text-sm transition-colors group"
          >
            Get in Touch
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
