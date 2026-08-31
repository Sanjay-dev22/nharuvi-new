import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Nharuvi Global. Reach our team in Bengaluru or Thrissur, or send us a message to discuss how we can support your business.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let&apos;s Start a Conversation"
        subtitle="Reach out to our team and discover how Nharuvi Global can help your business operate with greater clarity and confidence."
        image="/images/culture/culture-office.jpg"
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Get In Touch"
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-semibold text-[oklch(0.16_0.055_253)] mb-4">
                  How Can We Help?
                </h2>
                <p className="font-body text-gray-500 leading-relaxed text-sm">
                  Whether you have a specific business challenge or want to explore how we can support you, we would be glad to hear from you. We typically respond within one business day.
                </p>
              </div>

              {/* Primary Office */}
              <div className="bg-[oklch(0.975_0_0)] p-6 rounded-sm space-y-4">
                <div className="font-body text-xs text-[oklch(0.65_0.1_73)] uppercase tracking-widest font-semibold">
                  Primary Office — Bengaluru
                </div>
                <div className="flex gap-3">
                  <MapPin size={16} className="text-[oklch(0.65_0.1_73)] shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    OMBR Layout Main Road, Hi Tech Building<br />
                    Bengaluru East, Karnataka 560043, India
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone size={16} className="text-[oklch(0.65_0.1_73)] shrink-0" />
                  <a href="tel:+918056995508" className="font-body text-sm text-gray-600 hover:text-[oklch(0.16_0.055_253)] transition-colors">
                    +91 80569 95508
                  </a>
                </div>
                <div className="flex gap-3">
                  <Mail size={16} className="text-[oklch(0.65_0.1_73)] shrink-0" />
                  <a href="mailto:nharuviglobal@gmail.com" className="font-body text-sm text-gray-600 hover:text-[oklch(0.16_0.055_253)] transition-colors">
                    nharuviglobal@gmail.com
                  </a>
                </div>
                <a
                  href="https://maps.app.goo.gl/Shhs28XN1FvBQ4yS7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-xs text-[oklch(0.65_0.1_73)] hover:text-[oklch(0.16_0.055_253)] transition-colors mt-1"
                >
                  View on Google Maps →
                </a>
              </div>

              {/* Branch Office */}
              <div className="bg-[oklch(0.975_0_0)] p-6 rounded-sm space-y-4">
                <div className="font-body text-xs text-[oklch(0.65_0.1_73)] uppercase tracking-widest font-semibold">
                  Branch Office — Thrissur
                </div>
                <div className="flex gap-3">
                  <MapPin size={16} className="text-[oklch(0.65_0.1_73)] shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-gray-600 leading-relaxed">
                    Areepurath House, Puthenchira PO<br />
                    Pindani, Thrissur, Kerala – 680682, India
                  </p>
                </div>
                <div className="flex gap-3">
                  <Phone size={16} className="text-[oklch(0.65_0.1_73)] shrink-0" />
                  <a href="tel:+918138086074" className="font-body text-sm text-gray-600 hover:text-[oklch(0.16_0.055_253)] transition-colors">
                    +91 81380 86074
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-sm bg-[oklch(0.975_0_0)] flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[oklch(0.65_0.1_73)]" />
                </div>
                <div>
                  <div className="font-heading text-sm font-semibold text-[oklch(0.16_0.055_253)] mb-1">Business Hours</div>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">
                    Monday – Friday: 9:00 AM – 6:00 PM IST<br />
                    Saturday: 10:00 AM – 2:00 PM IST
                  </p>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="relative h-44 overflow-hidden rounded-sm bg-[oklch(0.975_0_0)]">
                <Image
                  src="/images/hero/hero-corporate-building.jpg"
                  alt="Bengaluru office"
                  fill
                  className="object-cover opacity-40"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://maps.app.goo.gl/Shhs28XN1FvBQ4yS7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[oklch(0.16_0.055_253)] hover:bg-[oklch(0.22_0.07_253)] text-white px-5 py-2.5 rounded-sm font-body text-sm font-medium transition-colors"
                  >
                    📍 Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="py-14 bg-[oklch(0.975_0_0)]">
        <div className="container-wide">
          <p className="font-body text-xs text-gray-400 uppercase tracking-widest mb-5">Quick Service Enquiries</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
              { label: "Tax Advisory", href: "/services/tax-advisory" },
              { label: "CFO Advisory", href: "/services/cfo-advisory" },
              { label: "Compliance Services", href: "/services/compliance-services" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="bg-white border border-gray-100 hover:border-[oklch(0.65_0.1_73)] hover:shadow-sm p-4 rounded-sm text-center font-body text-sm font-medium text-[oklch(0.16_0.055_253)] hover:text-[oklch(0.65_0.1_73)] transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
