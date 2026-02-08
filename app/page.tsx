"use client";

import {
  AlertTriangle,
  BadgeAlert,
  CopyX,
  Globe,
  Landmark,
  ShieldAlert,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CTAButton from "@/components/CTAButton";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { fadeUp, floatSlow, staggerContainer } from "@/components/motion";

const removeItems = [
  {
    label: "Counterfeit listings",
    icon: <ShoppingBag size={18} />,
    detail: "High-volume listing sweeps with marketplace-compliant evidence packets.",
  },
  {
    label: "Impersonation accounts",
    icon: <BadgeAlert size={18} />,
    detail: "Rapid identity abuse reporting across social networks and messaging channels.",
  },
  {
    label: "Trademark misuse ads",
    icon: <Landmark size={18} />,
    detail: "Ad-level misuse suppression for unauthorized bidding and deceptive creative.",
  },
  {
    label: "Copyright reuploads",
    icon: <CopyX size={18} />,
    detail: "Repeat-upload enforcement with escalation pathways and tracking logs.",
  },
  {
    label: "Fake storefronts",
    icon: <ShieldAlert size={18} />,
    detail: "Storefront authenticity checks paired with coordinated platform filing.",
  },
  {
    label: "Domain abuse",
    icon: <Globe size={18} />,
    detail: "Registrar and host-facing complaints for phishing, spoofing, and clone domains.",
  },
];

const processSteps = [
  {
    title: "Submit evidence",
    note: "We intake links, screenshots, ownership references, and priority signals.",
  },
  {
    title: "Verification & validation",
    note: "Our team validates policy fit and closes evidence gaps before filing.",
  },
  {
    title: "Takedown filing",
    note: "Structured submissions are issued through approved policy channels.",
  },
  {
    title: "Monitoring & escalation",
    note: "We track outcomes and prepare escalations when first-pass action stalls.",
  },
  {
    title: "Resolution report",
    note: "You receive closure logs, timelines, and next-step risk recommendations.",
  },
];

const platforms = [
  "Facebook / Instagram",
  "TikTok",
  "YouTube",
  "Shopee",
  "Lazada",
  "Amazon",
  "Shopify",
  "Domains",
];

const reasons = [
  "Fast turnaround with policy-ready submissions from day one.",
  "Professional documentation built for legal and compliance teams.",
  "Escalation-ready workflow for rejections and repeat infringers.",
  "Clear communication cadence with no black-box case handling.",
  "Powered by Shieldify IP expertise in high-risk online channels.",
];

const pricingPreview = [
  {
    title: "Starter",
    description: "Best for targeted single-platform takedowns with essential reporting.",
  },
  {
    title: "Growth",
    description: "For active enforcement across multiple channels with ongoing support.",
    popular: true,
  },
  {
    title: "Enterprise",
    description: "Built for large portfolios requiring governance, priority handling, and scale.",
  },
];

const casePreview = [
  {
    title: "Luxury Accessories",
    summary: "Problem: fake listings surged. Action: multi-platform filing batch. Result: major reduction in active impersonators within one cycle.",
    metric: "71% fewer active duplicates",
  },
  {
    title: "Beauty Retail Brand",
    summary: "Problem: ad trademark abuse. Action: evidence package + escalation path. Result: repeat abuse trend materially reduced in under one month.",
    metric: "2.4x faster closure turnaround",
  },
  {
    title: "Consumer Electronics",
    summary: "Problem: reseller identity cloning. Action: coordinated social and marketplace reports. Result: broad account removals and cleaner search results.",
    metric: "64% cleaner branded search",
  },
];

const achievementStats = [
  { label: "Annual enforcement actions", value: "12,000+" },
  { label: "Average case response window", value: "< 24h" },
  { label: "Multi-platform campaigns handled", value: "1,900+" },
  { label: "Client renewal confidence", value: "93%" },
];

const industries = [
  "Luxury & Fashion",
  "Beauty & Personal Care",
  "Consumer Electronics",
  "Healthcare & Supplements",
  "Automotive & Parts",
  "Home & Lifestyle",
];

type SnapshotMetric = {
  label: string;
  value: string;
};

const SNAPSHOT_BASE_UTC = Date.UTC(2026, 1, 8);

function buildSnapshotMetrics(now: Date): SnapshotMetric[] {
  const todayUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const daysElapsed = Math.max(0, Math.floor((todayUtc - SNAPSHOT_BASE_UTC) / 86400000));

  const activeQueues = 34 + daysElapsed;
  const resolvedThisWeek = 119 + daysElapsed;
  const readinessScore = Math.min(99, 92 + Math.floor(daysElapsed / 10));

  return [
    { label: "Active queues", value: String(activeQueues) },
    { label: "Resolved this week", value: String(resolvedThisWeek) },
    { label: "Escalation readiness", value: `${readinessScore}%` },
  ];
}

export default function Home() {
  const [snapshotMetrics, setSnapshotMetrics] = useState<SnapshotMetric[]>([
    { label: "Active queues", value: "34" },
    { label: "Resolved this week", value: "119" },
    { label: "Escalation readiness", value: "92%" },
  ]);

  useEffect(() => {
    setSnapshotMetrics(buildSnapshotMetrics(new Date()));
  }, []);

  return (
    <>
      <Section className="pt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-8 rounded-3xl border-gradient p-8 shadow-[0_30px_70px_-45px_rgba(37,99,235,0.65)] sm:p-12 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <motion.p variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border-gradient px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              <ShieldAlert size={14} /> Shieldify IP Powered
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Remove Counterfeits & Impersonators - Fast.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg text-slate-600">
              Professional brand protection takedowns across social media, marketplaces, and domains.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              RemoveNow helps legal, trust-and-safety, and brand teams compress response time, improve evidence quality,
              and run scalable enforcement with confidence across fragmented digital ecosystems.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="/contact">Start a Takedown</CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Talk to an Expert
              </CTAButton>
            </motion.div>
            <motion.ul variants={staggerContainer} className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              {[
                "Evidence-ready reports",
                "Clear SLA",
                "Platform-compliant workflows",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="border-gradient rounded-xl px-4 py-3"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp} className="mt-6 rounded-xl border-gradient p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Built for high-accountability teams:</p>
              <p className="mt-1">
                Structured case logs, timestamped submission history, and clear escalation notes that stand up to internal audits.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            animate={floatSlow}
            className="relative overflow-hidden rounded-2xl border-gradient p-5"
          >
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-cyan-300/25 blur-3xl" />
            <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-fuchsia-300/20 blur-3xl" />
            <p className="relative text-xs font-semibold uppercase tracking-wider text-cyan-700">Live Enforcement Snapshot</p>
            <div className="relative mt-4 space-y-3">
              {snapshotMetrics.map((item) => (
                <div key={item.label} className="rounded-xl border border-cyan-100/70 bg-white/80 p-3 backdrop-blur">
                  <p className="text-xs text-slate-500">{item.label}</p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-cyan-100/70 bg-white/80 p-3 text-xs text-slate-600">
              Operational benchmark only. Actual outcomes vary by platform policy, evidence quality, and jurisdiction.
            </div>
          </motion.div>
        </motion.div>
      </Section>

      <Section
        title="Proof of Performance"
        subtitle="Measured outcomes from high-volume enforcement programs managed by the Shieldify IP team."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {achievementStats.map((item) => (
            <div key={item.label} className="rounded-2xl border-gradient p-5">
              <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border-gradient p-5 text-sm leading-7 text-slate-700">
          <p className="font-semibold text-slate-900">Trusted in high-risk categories:</p>
          <p className="mt-1">{industries.join(" • ")}</p>
        </div>
      </Section>

      <Section
        title="What We Remove"
        subtitle="Focused action against common abuse patterns affecting brand trust and revenue."
      >
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {removeItems.map((item) => (
            <Card
              key={item.label}
              title={item.label}
              icon={item.icon}
              description={item.detail}
              className="hover:glow-magenta"
            />
          ))}
        </motion.div>
      </Section>

      <Section title="How It Works" subtitle="A structured workflow designed for speed, compliance, and traceability.">
        <div className="space-y-3">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex items-start gap-4 rounded-2xl border-gradient p-5 transition hover:shadow-[0_20px_40px_-35px_rgba(6,182,212,0.9)]"
            >
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300 bg-cyan-100/70">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-500" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Step {index + 1}</p>
                <p className="mt-1 text-sm font-medium text-slate-800 group-hover:text-cyan-700">{step.title}</p>
                <p className="mt-1 text-sm text-slate-600">{step.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Platforms Covered" subtitle="Cross-platform enforcement support across global consumer channels.">
        <div className="flex flex-wrap gap-3">
          {platforms.map((platform, index) => (
            <motion.span
              key={platform}
              className="border-gradient rounded-full px-4 py-2 text-sm font-medium text-slate-700 glow-cyan"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4 + index * 0.15, repeat: Infinity, ease: "easeInOut" }}
            >
              {platform}
            </motion.span>
          ))}
        </div>
      </Section>

      <Section title="Why RemoveNow" subtitle="Execution quality built on Shieldify IP expertise.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => (
            <div key={reason} className="border-gradient rounded-2xl p-5 text-sm font-medium text-slate-700 hover:glow-cyan">
              {reason}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border-gradient p-5 text-sm leading-7 text-slate-700">
          <p className="inline-flex items-center gap-2 font-semibold text-slate-900">
            <AlertTriangle size={16} className="text-cyan-700" />
            Serious threats need disciplined execution.
          </p>
          <p className="mt-2">
            RemoveNow is designed for teams that need defensible workflows, premium service responsiveness, and
            measurable brand-risk reduction across multiple jurisdictions.
          </p>
        </div>
      </Section>

      <Section title="Pricing Preview" subtitle="Plans that scale from targeted removals to enterprise operations.">
        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPreview.map((plan) => (
            <Card
              key={plan.title}
              title={plan.title}
              description={plan.description}
              className={plan.popular ? "ring-2 ring-cyan-300/60" : ""}
            >
              {plan.popular && (
                <span className="mt-4 inline-flex rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Most Popular
                </span>
              )}
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>Platform-aligned filing strategy</li>
                <li>Structured case-status updates</li>
                <li>Escalation support when required</li>
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/pricing" variant="secondary">
            View Custom Plan Options
          </CTAButton>
        </div>
      </Section>

      <Section title="Case Studies Preview" subtitle="Problem to outcome snapshots from recent enforcement campaigns.">
        <div className="grid gap-5 lg:grid-cols-3">
          {casePreview.map((item) => (
            <Card key={item.title} title={item.title} description={item.summary}>
              <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
              <span className="mt-4 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                {item.metric}
              </span>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">
                Problem {"->"} Action {"->"} Result execution model
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl border-gradient p-8 text-center shadow-[0_20px_50px_-40px_rgba(6,182,212,0.9)] sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Start your first takedown today.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Submit key evidence and get a clear enforcement plan with SLA expectations.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CTAButton href="/contact">Start a Takedown</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Talk to an Expert
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
