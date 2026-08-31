import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle, Mail } from "lucide-react";
import { PEOPLE } from "@/lib/data";
import PersonAvatar from "@/components/shared/PersonAvatar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PEOPLE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const person = PEOPLE.find((p) => p.slug === slug);
  if (!person) return {};
  return {
    title: `${person.name}${person.designation ? ` — ${person.designation}` : ""}`,
    description: person.bio,
  };
}

export default async function PersonProfilePage({ params }: Props) {
  const { slug } = await params;
  const person = PEOPLE.find((p) => p.slug === slug);
  if (!person) notFound();

  const others = PEOPLE.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      {/* Profile Hero */}
      <section className="pt-32 pb-20 bg-[oklch(0.16_0.055_253)]">
        <div className="container-wide">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 font-body text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/people" className="hover:text-white/70 transition-colors">Our People</Link>
            <span>/</span>
            <span className="text-white/70">{person.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Portrait */}
            <div className="lg:col-span-3">
              <div className="relative w-full max-w-xs aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                {person.image ? (
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    priority
                  />
                ) : (
                  <PersonAvatar name={person.name} size="lg" />
                )}
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-9">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-[oklch(0.65_0.1_73)]" />
                <span className="text-[oklch(0.65_0.1_73)] font-body text-xs uppercase tracking-[0.2em] font-semibold">
                  {person.department}
                </span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl font-semibold text-white leading-tight mb-1">
                {person.name}
              </h1>

              {person.designation && (
                <div className="inline-block bg-[oklch(0.65_0.1_73)]/20 border border-[oklch(0.65_0.1_73)]/30 text-[oklch(0.65_0.1_73)] font-body text-xs font-semibold px-3 py-1 uppercase tracking-wider rounded-sm mb-4">
                  {person.designation}
                </div>
              )}

              <p className="font-heading text-xl text-white/60 mb-8">{person.role}</p>

              <div className="w-16 h-px bg-[oklch(0.65_0.1_73)] mb-8" />

              <p className="font-body text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
                {person.bio}
              </p>

              {/* Specialties */}
              <div>
                <h3 className="font-body text-xs uppercase tracking-widest text-white/40 mb-4">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {person.specialties.map((s) => (
                    <div key={s} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-sm">
                      <CheckCircle size={13} className="text-[oklch(0.65_0.1_73)] shrink-0" />
                      <span className="font-body text-sm text-white/70">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[oklch(0.65_0.1_73)] hover:bg-[oklch(0.72_0.1_73)] text-white px-7 py-3.5 font-body font-medium text-sm tracking-wide transition-colors group"
                >
                  <Mail size={15} />
                  Work With {person.name.split(" ")[0]}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/people"
                  className="inline-flex items-center gap-3 border border-white/20 hover:border-white text-white px-7 py-3.5 font-body font-medium text-sm tracking-wide transition-colors group"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Our People
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More team members */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-3xl font-semibold text-[oklch(0.16_0.055_253)]">
              Other Team Members
            </h2>
            <Link
              href="/people"
              className="inline-flex items-center gap-2 text-[oklch(0.16_0.055_253)] font-body text-sm font-medium border-b border-[oklch(0.65_0.1_73)] pb-0.5 hover:text-[oklch(0.65_0.1_73)] transition-colors group"
            >
              View All
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {others.map((p) => (
              <Link key={p.slug} href={`/people/${p.slug}`} className="group block">
                <div className="bg-[oklch(0.975_0_0)] rounded-sm overflow-hidden hover:shadow-lg transition-all duration-500">
                  <div className="relative h-52 overflow-hidden">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    ) : (
                      <PersonAvatar name={p.name} />
                    )}
                  </div>
                  <div className="p-4">
                    <div className="w-5 h-0.5 bg-[oklch(0.65_0.1_73)] mb-2" />
                    <div className="font-heading text-base font-semibold text-[oklch(0.16_0.055_253)] group-hover:text-[oklch(0.65_0.1_73)] transition-colors">
                      {p.name}
                      {p.designation && (
                        <span className="font-body text-[11px] text-[oklch(0.65_0.1_73)] font-normal ml-1.5">{p.designation}</span>
                      )}
                    </div>
                    <div className="font-body text-xs text-gray-400 mt-0.5 leading-tight">{p.role}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
