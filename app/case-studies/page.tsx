import Card from "@/components/Card";
import Section from "@/components/Section";

const studies = [
  {
    title: "Luxury Fashion",
    tag: "Marketplace",
    outcome: "Counterfeit listing visibility reduced by over 70% in one quarter.",
    chips: ["71% suppression", "4-week cycle"],
  },
  {
    title: "D2C Beauty",
    tag: "Social Media",
    outcome: "Impersonation account wave contained with rapid filing and escalation cycles.",
    chips: ["92 accounts removed", "SLA on target"],
  },
  {
    title: "Consumer Tech",
    tag: "Domain Abuse",
    outcome: "Abusive domains and mirror pages removed, protecting campaign traffic.",
    chips: ["14 domains actioned", "traffic preserved"],
  },
  {
    title: "Sports Brand",
    tag: "Trademark Ads",
    outcome: "Ad misuse incidents dropped materially after repeated enforcement rounds.",
    chips: ["Policy-aligned", "multi-wave filing"],
  },
  {
    title: "Lifestyle Retail",
    tag: "Multi-platform",
    outcome: "Coordinated removal strategy improved channel trust and reduced counterfeit exposure.",
    chips: ["Cross-channel", "repeat monitoring"],
  },
  {
    title: "Health Supplements",
    tag: "Escalation",
    outcome: "Previously rejected reports resolved after evidence refresh and policy mapping.",
    chips: ["Escalation path", "clear audit trail"],
  },
  {
    title: "Home Appliances",
    tag: "Marketplace",
    outcome: "Unauthorized seller cluster disrupted with repeat monitoring support.",
    chips: ["Seller cluster removed", "brand trust uplift"],
  },
];

export default function CaseStudiesPage() {
  return (
    <Section className="pt-20" title="Case Studies" subtitle="Examples of enforcement outcomes from realistic brand protection scenarios.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {studies.map((study) => (
          <Card key={study.title} title={study.title} description={study.outcome} className="group">
            <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500" />
            <span className="mt-4 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
              {study.tag}
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {study.chips.map((chip) => (
                <span key={chip} className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-xs text-slate-600">
                  {chip}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold text-cyan-700 opacity-0 transition group-hover:opacity-100">View details {"->"}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
