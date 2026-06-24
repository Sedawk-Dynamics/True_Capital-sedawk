import SectionHead from "@/components/SectionHead";
import Icon from "@/components/Icon";
import { COMPANY } from "@/lib/data";

export const metadata = {
  title: "Grievance Redressal Policy",
  description:
    "Grievance Redressal Policy of True Capital & Advisory Pvt Ltd — how to raise a complaint and our step-by-step complaint resolution process.",
  alternates: { canonical: "/grievance" },
};

const GRIEVANCE_MOBILE = "+91 90276 38434";
const GRIEVANCE_MOBILE_INTL = "919027638434";

const STEPS = [
  { t: "Step 1: Complaint Registration", d: "Customers can submit complaints via phone, email, or written communication." },
  { t: "Step 2: Acknowledgement", d: "The complaint will be acknowledged within 48 business hours." },
  { t: "Step 3: Investigation & Resolution", d: "Our team will review the complaint and provide a resolution within 7 working days wherever possible." },
  { t: "Step 4: Escalation", d: "If the customer is not satisfied with the resolution provided, they may escalate the matter to the respective Bank, NBFC, Insurance Company, or Financial Institution associated with the service." },
];

const COMMITMENTS = [
  "Fair and transparent dealings.",
  "Timely resolution of complaints.",
  "Protection of customer information.",
  "Continuous improvement in service quality.",
];

export default function GrievancePage() {
  return (
    <div className="section container">
      <SectionHead
        eyebrow="Legal"
        title={<>Grievance <span className="grad">Redressal</span> Policy</>}
        sub="Customer satisfaction is our priority. We address concerns promptly, fairly, and transparently."
      />
      <div className="card reveal" style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{ color: "var(--muted)", fontSize: 14.5, marginBottom: 24 }}>
          At True Capital &amp; Advisory Pvt Ltd, customer satisfaction is our priority. We are committed to addressing
          customer concerns promptly, fairly, and transparently.
        </p>

        <div style={{ marginBottom: 26 }}>
          <h3 style={{ fontSize: 18, marginBottom: 8 }}>How to Raise a Complaint</h3>
          <p style={{ color: "var(--muted)", fontSize: 14.5, marginBottom: 14 }}>
            Customers may submit complaints through the following channels:
          </p>
          <div className="contact-info" style={{ gap: 14 }}>
            <div className="ci-item">
              <div className="icon-chip"><Icon name="pin" strokeWidth={2} /></div>
              <div><b>Registered Office</b><p>{COMPANY.registeredOffice}</p></div>
            </div>
            <div className="ci-item">
              <div className="icon-chip"><Icon name="phone" strokeWidth={2} /></div>
              <div><b>Mobile</b><p><a href={`tel:+${GRIEVANCE_MOBILE_INTL}`}>{GRIEVANCE_MOBILE}</a></p></div>
            </div>
            <div className="ci-item">
              <div className="icon-chip"><Icon name="mail" strokeWidth={2} /></div>
              <div><b>Email</b><p><a href={`mailto:${COMPANY.emailGrievance}`}>{COMPANY.emailGrievance}</a></p></div>
            </div>
            <div className="ci-item">
              <div className="icon-chip"><Icon name="clock" strokeWidth={2} /></div>
              <div><b>Working Hours</b><p>Monday to Saturday: 9:00 AM – 6:00 PM<br />Sunday: Closed</p></div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 26 }}>
          <h3 style={{ fontSize: 18, marginBottom: 12 }}>Complaint Resolution Process</h3>
          {STEPS.map((s) => (
            <div key={s.t} style={{ marginBottom: 12 }}>
              <b style={{ fontSize: 15 }}>{s.t}</b>
              <p style={{ color: "var(--muted)", fontSize: 14.5, marginTop: 4 }}>{s.d}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 style={{ fontSize: 18, marginBottom: 10 }}>Customer Commitment</h3>
          <p style={{ color: "var(--muted)", fontSize: 14.5, marginBottom: 12 }}>We are committed to:</p>
          <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {COMMITMENTS.map((c) => (
              <li key={c} style={{ display: "flex", gap: 10, color: "var(--muted)", fontSize: 14.5 }}>
                <Icon name="check" strokeWidth={2} width={20} height={20} style={{ color: "var(--blue-2)", flex: "none" }} /> {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
