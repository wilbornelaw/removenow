"use client";

import { FormEvent } from "react";
import CTAButton from "@/components/CTAButton";
import Section from "@/components/Section";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackEvent("lead_submit", { form: "contact" });
    alert("Thanks. Your request has been captured. Our team will follow up shortly.");
  };

  return (
    <Section className="pt-20" title="Contact" subtitle="Share your enforcement request and we will propose a practical response plan.">
      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        <form onSubmit={handleSubmit} className="rounded-2xl border-gradient p-6 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input id="name" name="name" required className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm transition focus:border-cyan-400 focus:shadow-[inset_0_0_0_1px_rgba(6,182,212,0.5),0_0_0_4px_rgba(103,232,249,0.24)] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input id="email" name="email" type="email" required className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm transition focus:border-cyan-400 focus:shadow-[inset_0_0_0_1px_rgba(6,182,212,0.5),0_0_0_4px_rgba(103,232,249,0.24)] focus:outline-none" />
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="brandName" className="mb-2 block text-sm font-medium text-slate-700">
                Brand name
              </label>
              <input id="brandName" name="brandName" required className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm transition focus:border-cyan-400 focus:shadow-[inset_0_0_0_1px_rgba(6,182,212,0.5),0_0_0_4px_rgba(103,232,249,0.24)] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="platform" className="mb-2 block text-sm font-medium text-slate-700">
                Platform
              </label>
              <input id="platform" name="platform" required className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm transition focus:border-cyan-400 focus:shadow-[inset_0_0_0_1px_rgba(6,182,212,0.5),0_0_0_4px_rgba(103,232,249,0.24)] focus:outline-none" placeholder="e.g., TikTok, Amazon, Domain" />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="links" className="mb-2 block text-sm font-medium text-slate-700">
              URLs / Links
            </label>
            <textarea id="links" name="links" required rows={3} className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm transition focus:border-cyan-400 focus:shadow-[inset_0_0_0_1px_rgba(6,182,212,0.5),0_0_0_4px_rgba(103,232,249,0.24)] focus:outline-none" />
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea id="message" name="message" required rows={5} className="w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-sm transition focus:border-cyan-400 focus:shadow-[inset_0_0_0_1px_rgba(6,182,212,0.5),0_0_0_4px_rgba(103,232,249,0.24)] focus:outline-none" />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="btn-shine inline-flex items-center justify-center rounded-xl border border-blue-900/30 bg-[linear-gradient(140deg,#1d4ed8,#1e3a8a)] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_-22px_rgba(30,64,175,0.95)] transition hover:bg-[linear-gradient(140deg,#1e40af,#1e3a8a)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
            >
              Start a Takedown
            </button>
            <CTAButton href="/services" variant="secondary">
              Review Services
            </CTAButton>
          </div>
        </form>

        <aside className="rounded-2xl border-gradient p-6">
          <h2 className="text-xl font-semibold text-slate-900">Submission notes</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>No sensitive credentials required.</li>
            <li>Platforms may receive reporter details as required by policy.</li>
            <li>Include direct links and clear ownership evidence for faster validation.</li>
          </ul>
        </aside>
      </div>
    </Section>
  );
}
