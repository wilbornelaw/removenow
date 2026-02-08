import Card from "@/components/Card";
import CTAButton from "@/components/CTAButton";
import Section from "@/components/Section";

const tiers = [
  {
    name: "Starter",
    volume: "Up to 15 targets / month",
    support: "Business-hours support",
    reporting: "Weekly status summary",
    fit: "Single brand, focused channel",
  },
  {
    name: "Growth",
    volume: "Up to 60 targets / month",
    support: "Priority response window",
    reporting: "Twice-weekly reporting",
    fit: "Multi-channel enforcement",
    popular: true,
  },
  {
    name: "Enterprise",
    volume: "Custom volume",
    support: "Dedicated escalation desk",
    reporting: "Custom dashboards + executive updates",
    fit: "Large portfolio governance",
  },
];

const addOns = ["Monitoring", "Priority SLA", "Multi-platform bundle"];

export default function PricingPage() {
  return (
    <>
      <Section className="pt-20" title="Pricing" subtitle="Transparent tiers with room to scale as threat volume grows.">
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              title={tier.name}
              description={tier.fit}
              className={`group ${tier.popular ? "ring-2 ring-cyan-300/70" : ""}`}
            >
              {tier.popular && (
                <span className="mb-4 inline-flex rounded-full border border-cyan-300 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700">
                  Most Popular
                </span>
              )}
              <ul className="space-y-2 text-sm text-slate-600">
                <li>{tier.volume}</li>
                <li>{tier.support}</li>
                <li>{tier.reporting}</li>
              </ul>
              <div className="mt-5">
                <CTAButton href="/contact" className="w-full">
                  Select {tier.name}
                </CTAButton>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border-gradient">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50/70">
              <tr>
                <th className="px-5 py-4 font-semibold text-slate-800">Tier</th>
                <th className="px-5 py-4 font-semibold text-slate-800">Volume</th>
                <th className="px-5 py-4 font-semibold text-slate-800">Support</th>
                <th className="px-5 py-4 font-semibold text-slate-800">Reporting</th>
                <th className="px-5 py-4 font-semibold text-slate-800">Best Fit</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier) => (
                <tr key={tier.name} className="border-b border-slate-100/80 last:border-0 hover:bg-cyan-50/40">
                  <td className="px-5 py-4 font-semibold text-slate-900">{tier.name}</td>
                  <td className="px-5 py-4 text-slate-600">{tier.volume}</td>
                  <td className="px-5 py-4 text-slate-600">{tier.support}</td>
                  <td className="px-5 py-4 text-slate-600">{tier.reporting}</td>
                  <td className="px-5 py-4 text-slate-600">{tier.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-2xl border-gradient p-6">
          <h2 className="text-xl font-semibold text-slate-900">Add-ons</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {addOns.map((addon) => (
              <span key={addon} className="rounded-full border-gradient px-4 py-2 text-sm text-slate-700 glow-cyan">
                {addon}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 text-sm text-amber-900">
          Disclaimer: Takedown outcomes depend on platform policies and evidence standards. RemoveNow does not guarantee removals.
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/contact">Start a Takedown</CTAButton>
          <CTAButton href="/contact" variant="secondary">
            Talk to an Expert
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
