import Section from "@/components/Section";

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Effective Date and Acceptance",
      body: "Effective date: February 8, 2026. These Terms of Service (\"Terms\") govern your use of removenow.online and related RemoveNow services. By accessing the website or submitting a request, you agree to these Terms.",
    },
    {
      title: "2. Services Overview",
      body: "RemoveNow provides brand protection support, including online reporting support, evidence preparation guidance, and enforcement workflow assistance. Service scope is defined by your plan and any written engagement terms.",
    },
    {
      title: "3. No Guaranteed Outcomes",
      body: "You acknowledge that platform and third-party decisions are outside RemoveNow's control. RemoveNow does not guarantee removals, account actions, timing outcomes, or specific enforcement decisions.",
    },
    {
      title: "4. User Responsibilities",
      body: "You agree to provide accurate, lawful, and up-to-date information; maintain rights or authority to submit claims; avoid sharing sensitive credentials unless specifically requested through approved channels; and comply with applicable law.",
    },
    {
      title: "5. Fees and Payment",
      body: "Paid services are subject to pricing and billing terms presented at purchase or in a written proposal. Unless otherwise agreed, fees are non-refundable once work has started.",
    },
    {
      title: "6. Intellectual Property",
      body: "All website content, branding, layout, and materials provided by RemoveNow are owned by RemoveNow and/or its licensors. You retain ownership of materials you submit, and grant RemoveNow rights needed to perform services.",
    },
    {
      title: "7. Confidentiality",
      body: "Each party agrees to handle non-public information with reasonable care and use it only for permitted business purposes, subject to legal and compliance obligations.",
    },
    {
      title: "8. Prohibited Conduct",
      body: "You must not use the website or services to submit false claims, violate third-party rights, interfere with platform integrity, introduce malicious code, or engage in unlawful, abusive, or fraudulent conduct.",
    },
    {
      title: "9. Third-Party Platforms and Links",
      body: "Services may involve third-party platforms, policies, and tools. RemoveNow is not responsible for third-party content, policy changes, service interruptions, or independent actions taken by those parties.",
    },
    {
      title: "10. Disclaimer of Warranties",
      body: "To the fullest extent permitted by law, services are provided \"as is\" and \"as available\" without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.",
    },
    {
      title: "11. Limitation of Liability",
      body: "To the fullest extent permitted by law, RemoveNow will not be liable for indirect, incidental, special, consequential, punitive, or lost-profit damages, or for delays or failures caused by events beyond reasonable control.",
    },
    {
      title: "12. Indemnification",
      body: "You agree to defend, indemnify, and hold harmless RemoveNow and its affiliates from claims, losses, liabilities, and expenses arising from your submissions, misuse, legal violations, or breach of these Terms.",
    },
    {
      title: "13. Suspension and Termination",
      body: "We may suspend or terminate access for security, legal, policy, or breach-related reasons. Termination does not affect accrued payment obligations or provisions that reasonably survive termination.",
    },
    {
      title: "14. Governing Law",
      body: "These Terms are governed by applicable law as specified in your governing agreement or, if none applies, by a mutually agreed forum. You should update this section with approved jurisdiction language.",
    },
    {
      title: "15. Changes to Terms",
      body: "We may revise these Terms periodically. Updated Terms become effective when posted unless otherwise stated.",
    },
    {
      title: "16. Contact",
      body: "Questions about these Terms can be submitted through removenow.online/contact.",
    },
  ];

  return (
    <Section
      className="pt-20"
      title="Terms of Service"
      subtitle="Terms governing your use of the RemoveNow website and related services."
    >
      <div className="space-y-4">
        {sections.map((section) => (
          <article key={section.title} className="rounded-2xl border-gradient p-6 text-sm leading-7 text-slate-600">
            <h2 className="text-base font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-2">{section.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/80 p-5 text-xs leading-6 text-amber-900">
        Legal note: This is a general terms draft and should be reviewed and finalized by qualified counsel before production use.
      </div>
    </Section>
  );
}
