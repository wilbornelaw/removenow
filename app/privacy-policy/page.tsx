import Section from "@/components/Section";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "1. Effective Date",
      body: "Effective date: February 8, 2026. This Privacy Policy explains how RemoveNow (\"RemoveNow\", \"we\", \"us\", or \"our\") collects, uses, shares, and protects personal information when you visit removenow.online or submit a request through our contact forms.",
    },
    {
      title: "2. Information We Collect",
      body: "We may collect contact details (such as name, email, brand name), case-related details you submit (such as platform names, URLs, and supporting descriptions), technical data (such as browser type, device information, and approximate location), and communications data when you contact us.",
    },
    {
      title: "3. How We Use Information",
      body: "We use information to respond to inquiries, evaluate and manage enforcement requests, communicate updates, improve website performance and service quality, maintain security, prevent misuse, and comply with legal obligations.",
    },
    {
      title: "4. Legal Basis and Jurisdiction",
      body: "Where required by applicable law, we process personal data based on consent, legitimate interests, contractual necessity, and/or legal compliance obligations. Rights and obligations may vary by jurisdiction.",
    },
    {
      title: "5. Sharing of Information",
      body: "We do not sell personal information. We may share information with service providers supporting website and operations, with platform operators and intermediaries as needed for takedown workflows, with professional advisors, and where required by law, court order, or regulatory process.",
    },
    {
      title: "6. Platform Reporting Notice",
      body: "When filing reports, certain reporter or rights-holder details may be disclosed to platforms or counterparties where required by platform policy or legal process.",
    },
    {
      title: "7. Data Retention",
      body: "We retain information only for as long as reasonably necessary for business, compliance, dispute management, security, and legal purposes. Retention periods may differ by case type and jurisdiction.",
    },
    {
      title: "8. Security Measures",
      body: "We apply reasonable administrative, technical, and organizational safeguards to protect data. No system can guarantee absolute security, and you acknowledge transmission and storage risks inherent to internet-based services.",
    },
    {
      title: "9. Cookies and Analytics",
      body: "We may use cookies or similar technologies for basic functionality, traffic measurement, and user experience improvements. You can control cookies through browser settings, though some features may be affected.",
    },
    {
      title: "10. Your Rights",
      body: "Depending on applicable law, you may have rights to access, correct, delete, restrict, object to, or port your data, and to withdraw consent where processing relies on consent. To exercise rights, contact us through the Contact page.",
    },
    {
      title: "11. International Transfers",
      body: "Your information may be processed in countries other than your own. Where required, we use appropriate safeguards for cross-border transfers.",
    },
    {
      title: "12. Children",
      body: "This website and services are not directed to children under 13 (or the equivalent minimum age in your jurisdiction), and we do not knowingly collect personal data from children.",
    },
    {
      title: "13. Changes to This Policy",
      body: "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.",
    },
    {
      title: "14. Contact",
      body: "For privacy questions or requests, please use the Contact page at removenow.online/contact.",
    },
  ];

  return (
    <Section
      className="pt-20"
      title="Privacy Policy"
      subtitle="How RemoveNow collects, uses, shares, and safeguards your information."
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
        Legal note: This is a general website policy draft and should be reviewed by qualified counsel before production use.
      </div>
    </Section>
  );
}
