import { FileCheck, Globe, Megaphone, ShieldCheck, Waypoints } from "lucide-react";
import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import Section from "@/components/Section";

const services = [
  {
    title: "Social Media Takedowns",
    icon: <Megaphone size={18} />,
    description: "Account impersonation, trademark misuse, and content violations on social platforms.",
    timeline: "Typical timeline: 2-7 business days",
    inputs: "Required inputs: profile URLs, screenshots, trademark/copyright basis",
    deliverables: "Deliverables: submission record, status updates, final resolution summary",
  },
  {
    title: "Marketplace Enforcement",
    icon: <ShieldCheck size={18} />,
    description: "Counterfeit listings and unauthorized storefront activity across major marketplaces.",
    timeline: "Typical timeline: 3-10 business days",
    inputs: "Required inputs: listing links, proof of ownership, product authenticity references",
    deliverables: "Deliverables: filing pack, removal tracker, case-close report",
  },
  {
    title: "Domain & Website Removal",
    icon: <Globe size={18} />,
    description: "Abusive domains, deceptive pages, and cloned storefront websites.",
    timeline: "Typical timeline: 5-14 business days",
    inputs: "Required inputs: domain URLs, abuse evidence, rights documentation",
    deliverables: "Deliverables: registrar/host complaints, escalation notes, closure memo",
  },
  {
    title: "Evidence Packaging (LoA / PoA guidance)",
    icon: <FileCheck size={18} />,
    description: "Structured preparation support for authorization and evidence completeness.",
    timeline: "Typical timeline: 1-3 business days",
    inputs: "Required inputs: brand details, claimant identity, authorization documents",
    deliverables: "Deliverables: evidence checklist, document quality review, filing-ready package",
  },
  {
    title: "Escalation Support",
    icon: <Waypoints size={18} />,
    description: "Second-line handling for rejected or delayed platform actions.",
    timeline: "Typical timeline: 3-8 business days",
    inputs: "Required inputs: rejection references, prior filings, supplemental evidence",
    deliverables: "Deliverables: escalation brief, updated submission, progress communication",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-20" title="Services" subtitle="Targeted enforcement workflows for modern platform ecosystems.">
        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} title={service.title} icon={service.icon} description={service.description}>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li>{service.timeline}</li>
                <li>{service.inputs}</li>
                <li>{service.deliverables}</li>
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="rounded-3xl border-gradient p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Need platform-specific enforcement support?</h2>
          <p className="mt-3 text-slate-600">Share your priority targets and we will map a practical takedown sequence.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
