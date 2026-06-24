import SectionHead from "@/components/SectionHead";

export const metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer for True Capital & Advisory Pvt Ltd — we are a financial advisory and DSA service provider; all loans and financial products are offered by authorized Banks, NBFCs and financial institutions.",
  alternates: { canonical: "/disclaimer" },
};

const PARAS = [
  "The information provided on this website is for general informational purposes only.",
  "True Capital & Advisory Pvt Ltd is a financial advisory and DSA service provider and does not directly provide loans, credit facilities, or financial products.",
  "All loans and financial products are offered by authorized Banks, NBFCs, and financial institutions. Loan approval, interest rates, processing fees, repayment terms, and other conditions are determined solely by the respective lender.",
  "The loan eligibility calculators, EMI calculators, credit score tools, articles, blogs, and other resources available on this website are intended for reference purposes only and should not be considered financial advice.",
  "While we strive to keep information accurate and up-to-date, True Capital & Advisory Pvt Ltd makes no warranties regarding the completeness, reliability, or accuracy of the information provided.",
  "Users are advised to independently verify all information before making any financial decisions.",
];

export default function DisclaimerPage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Legal"
        title={<><span className="grad">Disclaimer</span></>}
        sub="Important information about the nature of our services and the resources on this website."
      />
      <div className="card reveal" style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ color: "var(--muted-2)", fontSize: 13, marginBottom: 18 }}>Last updated: 2026</p>
        {PARAS.map((para, i) => (
          <p key={i} style={{ color: "var(--muted)", fontSize: 14.5, marginBottom: 14 }}>{para}</p>
        ))}
      </div>
    </div>
  );
}
