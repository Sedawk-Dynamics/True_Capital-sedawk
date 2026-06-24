import SectionHead from "@/components/SectionHead";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions of True Capital & Advisory Pvt Ltd — the terms governing the use of our website, loan advisory, DSA and financial facilitation services.",
  alternates: { canonical: "/terms" },
};

const INTRO =
  "Welcome to True Capital & Advisory Pvt Ltd. By accessing and using our website and services, you agree to comply with and be bound by the following Terms & Conditions.";

const SECTIONS = [
  {
    h: "1. About Our Services",
    p: [
      "True Capital & Advisory Pvt Ltd provides loan advisory, financial consultancy, DSA services, insurance assistance, and related financial solutions. We act as a facilitator between customers and authorized Banks/NBFCs.",
    ],
  },
  {
    h: "2. Loan Approval",
    p: [
      "Loan approval, sanction amount, interest rate, tenure, and other terms are solely determined by the respective Bank/NBFC based on their eligibility criteria and internal policies.",
    ],
  },
  {
    h: "3. No Guarantee",
    p: [
      "True Capital & Advisory Pvt Ltd does not guarantee approval of any loan application. Approval is subject to verification, credit assessment, and lender discretion.",
    ],
  },
  {
    h: "4. Customer Information",
    p: [
      "Customers must provide accurate, complete, and genuine information and documents. Submission of false or misleading information may result in rejection of the application.",
    ],
  },
  {
    h: "5. Third-Party Services",
    p: [
      "Our website may contain information or links related to partner Banks, NBFCs, insurance companies, or third-party service providers. We are not responsible for the policies, actions, or services of such third parties.",
    ],
  },
  {
    h: "6. Intellectual Property",
    p: [
      "All content, logos, trademarks, graphics, and materials displayed on this website are the property of True Capital & Advisory Pvt Ltd and may not be copied, reproduced, or distributed without written permission.",
    ],
  },
  {
    h: "7. Limitation of Liability",
    p: [
      "True Capital & Advisory Pvt Ltd shall not be liable for any direct, indirect, incidental, or consequential losses arising from the use of this website or our services.",
    ],
  },
  {
    h: "8. Modification of Terms",
    p: [
      "We reserve the right to modify these Terms & Conditions at any time without prior notice.",
    ],
  },
  {
    h: "9. Governing Law",
    p: [
      "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Legal"
        title={<>Terms &amp; <span className="grad">Conditions</span></>}
        sub="The terms that govern your use of our website and services."
      />
      <div className="card reveal" style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ color: "var(--muted-2)", fontSize: 13, marginBottom: 18 }}>Last updated: 2026</p>
        <p style={{ color: "var(--muted)", fontSize: 14.5, marginBottom: 24 }}>{INTRO}</p>
        {SECTIONS.map((s) => (
          <div key={s.h} style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>{s.h}</h3>
            {s.p.map((para, i) => (
              <p key={i} style={{ color: "var(--muted)", fontSize: 14.5, marginBottom: 10 }}>{para}</p>
            ))}
          </div>
        ))}
        <p style={{ color: "var(--muted-2)", fontSize: 12.5, marginTop: 8 }}>
          These Terms are provided for general information and may be updated from time to time. Continued use of the
          website constitutes acceptance of the latest version.
        </p>
      </div>
    </div>
  );
}
