"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company name is required"),
  inquiry: z.string().min(1, "Please select an inquiry type"),
  message: z.string().min(20, "Please provide more detail (minimum 20 characters)"),
  consent: z.boolean().refine((v) => v, "You must accept the terms to continue"),
});

type FormData = z.infer<typeof schema>;

const INQUIRY_TYPES = [
  "Accounting & Bookkeeping",
  "Tax Advisory",
  "Audit & Assurance",
  "Compliance Services",
  "CFO Advisory",
  "Business Consulting",
  "Risk Advisory",
  "Corporate Finance",
  "Process Optimization",
  "Digital Transformation",
  "General Inquiry",
  "Careers",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Form submitted:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="bg-[oklch(0.975_0_0)] rounded-sm p-16 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-16 h-16 bg-[oklch(0.65_0.1_73)]/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-[oklch(0.65_0.1_73)]" />
        </div>
        <h3 className="font-heading text-2xl font-semibold text-[oklch(0.16_0.055_253)] mb-3">
          Thank You for Reaching Out
        </h3>
        <p className="font-body text-gray-500 mb-8 max-w-sm leading-relaxed">
          A member of our team will review your inquiry and respond within 1–2 business days.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="font-body text-sm text-[oklch(0.65_0.1_73)] border-b border-[oklch(0.65_0.1_73)] hover:text-[oklch(0.16_0.055_253)] transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[oklch(0.975_0_0)] p-8 lg:p-10 rounded-sm">
      <h2 className="font-heading text-2xl font-semibold text-[oklch(0.16_0.055_253)] mb-2">
        Send Us a Message
      </h2>
      <p className="font-body text-sm text-gray-500 mb-8">
        All fields marked with an asterisk (*) are required.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block font-body text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
              First Name *
            </label>
            <input
              {...register("firstName")}
              type="text"
              placeholder="John"
              className="w-full bg-white border border-gray-200 focus:border-[oklch(0.16_0.055_253)] text-gray-700 px-4 py-3 font-body text-sm outline-none transition-colors rounded-sm placeholder:text-gray-300"
            />
            {errors.firstName && (
              <p className="mt-1.5 font-body text-xs text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block font-body text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
              Last Name *
            </label>
            <input
              {...register("lastName")}
              type="text"
              placeholder="Smith"
              className="w-full bg-white border border-gray-200 focus:border-[oklch(0.16_0.055_253)] text-gray-700 px-4 py-3 font-body text-sm outline-none transition-colors rounded-sm placeholder:text-gray-300"
            />
            {errors.lastName && (
              <p className="mt-1.5 font-body text-xs text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block font-body text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
              Email Address *
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="john@company.com"
              className="w-full bg-white border border-gray-200 focus:border-[oklch(0.16_0.055_253)] text-gray-700 px-4 py-3 font-body text-sm outline-none transition-colors rounded-sm placeholder:text-gray-300"
            />
            {errors.email && (
              <p className="mt-1.5 font-body text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block font-body text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
              Phone Number
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="+1 234 567 890"
              className="w-full bg-white border border-gray-200 focus:border-[oklch(0.16_0.055_253)] text-gray-700 px-4 py-3 font-body text-sm outline-none transition-colors rounded-sm placeholder:text-gray-300"
            />
          </div>
        </div>

        <div>
          <label className="block font-body text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
            Company Name *
          </label>
          <input
            {...register("company")}
            type="text"
            placeholder="Your Company Ltd."
            className="w-full bg-white border border-gray-200 focus:border-[oklch(0.16_0.055_253)] text-gray-700 px-4 py-3 font-body text-sm outline-none transition-colors rounded-sm placeholder:text-gray-300"
          />
          {errors.company && (
            <p className="mt-1.5 font-body text-xs text-red-500">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label className="block font-body text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
            Area of Interest *
          </label>
          <select
            {...register("inquiry")}
            className="w-full bg-white border border-gray-200 focus:border-[oklch(0.16_0.055_253)] text-gray-700 px-4 py-3 font-body text-sm outline-none transition-colors rounded-sm appearance-none"
            defaultValue=""
          >
            <option value="" disabled>Select an inquiry type</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.inquiry && (
            <p className="mt-1.5 font-body text-xs text-red-500">{errors.inquiry.message}</p>
          )}
        </div>

        <div>
          <label className="block font-body text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">
            How Can We Help? *
          </label>
          <textarea
            {...register("message")}
            rows={5}
            placeholder="Tell us about your business and what you are looking to achieve..."
            className="w-full bg-white border border-gray-200 focus:border-[oklch(0.16_0.055_253)] text-gray-700 px-4 py-3 font-body text-sm outline-none transition-colors rounded-sm placeholder:text-gray-300 resize-none"
          />
          {errors.message && (
            <p className="mt-1.5 font-body text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        <div>
          <label className="flex gap-3 cursor-pointer">
            <input
              {...register("consent")}
              type="checkbox"
              className="w-4 h-4 mt-0.5 shrink-0 accent-[oklch(0.65_0.1_73)]"
            />
            <span className="font-body text-xs text-gray-500 leading-relaxed">
              I agree to Nharuvi Global contacting me regarding my inquiry. I understand my information will be handled in accordance with the{" "}
              <a href="/privacy" className="text-[oklch(0.65_0.1_73)] hover:underline">Privacy Policy</a>.
            </span>
          </label>
          {errors.consent && (
            <p className="mt-1.5 font-body text-xs text-red-500">{errors.consent.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-[oklch(0.16_0.055_253)] hover:bg-[oklch(0.22_0.07_253)] disabled:opacity-70 text-white py-4 font-body font-medium text-sm tracking-wide transition-colors rounded-sm group"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
