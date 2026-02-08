import FAQAccordion from "@/components/FAQAccordion";
import Section from "@/components/Section";

const faqItems = [
  {
    question: "What evidence is required?",
    answer:
      "URLs, screenshots, timestamps, and proof of ownership rights are usually required. We provide a checklist for each platform type.",
  },
  {
    question: "How long does a takedown take?",
    answer:
      "Most cases resolve in a few business days, but timelines vary by platform, jurisdiction, and evidence quality.",
  },
  {
    question: "What if a platform rejects?",
    answer:
      "We review rejection reasons, strengthen evidence, and submit escalations where policy pathways allow.",
  },
  {
    question: "Do you guarantee removal?",
    answer:
      "No. Final decisions are always made by the platform or service provider based on their policies.",
  },
  {
    question: "Can you handle multiple jurisdictions?",
    answer:
      "Yes. We support multi-region enforcement workflows and adapt evidence formats to platform and jurisdictional expectations.",
  },
  {
    question: "Do you provide reports?",
    answer:
      "Yes. Every engagement includes documented filing logs, status updates, and final resolution reports.",
  },
];

export default function FAQPage() {
  return (
    <Section className="pt-20" title="FAQ" subtitle="Common questions about process, timelines, and compliance boundaries.">
      <div className="mb-6 rounded-2xl border-gradient p-4 text-sm text-slate-600">
        Policies vary by platform. We optimize evidence quality and escalation readiness for every submission.
      </div>
      <FAQAccordion items={faqItems} />
    </Section>
  );
}
