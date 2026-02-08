import Link from "next/link";

const rows = [
  {
    task: "Portal / account set-up",
    responsibility: "Shieldify IP",
    description:
      "Includes client account creation, contact details registration, asset configuration (brands, trademarks, logos) and preferred communication channels for enforcement updates.",
  },
  {
    task: "Provide business information",
    responsibility: "Customer",
    description:
      "Legal entity name, registered address, tax / company ID (if applicable) and main contact person for IP enforcement matters.",
  },
  {
    task: "Provide Letter of Authorization (LoA)",
    responsibility: "Customer",
    description:
      "Document signed by the IP rights owner authorizing Shieldify IP to submit IP infringement reports and takedown requests on its behalf. Recommended format and sample template can be requested from our team.",
  },
  {
    task: "Provide IP rights documentation",
    responsibility: "Customer",
    description:
      "Trademark and/or copyright certificates for the brands to be protected. The customer should provide clear copies of the original certificates for each protected territory and class.",
  },
  {
    task: "Provide non-infringing sellers / official channels",
    responsibility: "Customer",
    description:
      "A list of official websites, stores, marketplaces and social media accounts owned or authorized by the brand. This allows Shieldify IP to create whitelist rules and avoid action against legitimate channels.",
  },
  {
    task: "Enforcement account creation & IP rights submission",
    responsibility: "Shieldify IP",
    description:
      "Using the LoA and IP documentation, Shieldify IP creates or configures enforcement accounts on platforms (Meta, TikTok, marketplaces, etc.) and links the rights holder information where required.",
  },
  {
    task: "Onboarding and training call",
    responsibility: "Customer & Shieldify IP",
    description:
      "An optional onboarding session to walk through the enforcement workflow, reporting formats, priority rules and communication process for urgent cases.",
  },
  {
    task: "Validations & test cases",
    responsibility: "Customer",
    description:
      "Customer reviews initial detections or test reports, confirms which listings, pages or accounts should be enforced, and aligns on enforcement thresholds (e.g. price deviations, product categories, regions).",
  },
  {
    task: "Automation & monitoring rules set-up",
    responsibility: "Shieldify IP",
    description:
      "Shieldify IP configures monitoring rules, keywords, image patterns and whitelists to automate detection as much as possible, while keeping manual review for sensitive or borderline cases.",
  },
  {
    task: "First enforcement batch",
    responsibility: "Shieldify IP",
    description:
      "Once validation is complete and all documents are in place, the first set of takedown actions is submitted on the agreed platforms. Results and learnings are reviewed together with the customer to fine-tune future enforcement.",
  },
];

export default function DocumentationPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-cyan-200/70 bg-[linear-gradient(120deg,#0f4a67,#1e3a8a)] py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(34,211,238,0.24),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.26),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-15 bg-grid" />
        <div className="relative mx-auto w-full max-w-6xl px-4 text-left sm:px-6 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Documentation</h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-cyan-100/90">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-white">Documentation</span>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
            Onboarding Guide
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            This onboarding guide explains the key documents and steps required to start using <strong>Shieldify IP</strong> brand protection and enforcement services.
          </p>

          <h2 className="mt-8 text-3xl font-semibold text-slate-900">Onboarding Docs: Details</h2>

          <div className="mt-6 overflow-x-auto rounded-xl border-gradient bg-white/85 shadow-[0_18px_35px_-25px_rgba(14,116,144,0.45)]">
            <table className="min-w-full text-left text-sm text-slate-700">
              <thead className="bg-[linear-gradient(90deg,#1e3a8a,#155e75)] text-cyan-50">
                <tr>
                  <th className="w-1/4 border-b border-cyan-300/30 px-4 py-3 font-semibold">Task</th>
                  <th className="w-1/6 border-b border-cyan-300/30 px-4 py-3 font-semibold">Responsibility</th>
                  <th className="border-b border-cyan-300/30 px-4 py-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.task}
                    className={`align-top transition ${index % 2 === 0 ? "bg-white/95" : "bg-cyan-50/45"} hover:bg-cyan-50/70`}
                  >
                    <td className="border-b border-cyan-100 px-4 py-3 text-slate-800">{row.task}</td>
                    <td className="border-b border-cyan-100 px-4 py-3 text-slate-800">{row.responsibility}</td>
                    <td className="border-b border-cyan-100 px-4 py-3 text-slate-600">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
