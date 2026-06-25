import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email is sent via SMTP (nodemailer) — needs the Node.js runtime, not Edge.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Human-friendly labels for known lead fields (anything else falls back to the raw key).
const LABELS = {
  name: "Name",
  firstName: "First Name",
  lastName: "Last Name",
  fatherName: "Father's Name",
  dob: "Date of Birth",
  gender: "Gender",
  mobile: "Mobile",
  email: "Email",
  source: "Source",
  loanType: "Loan Type",
  amount: "Amount",
  loanAmount: "Loan Amount",
  message: "Message",
  city: "City",
  state: "State",
  pin: "PIN Code",
  currentAddress: "Current Address",
  permanentAddress: "Permanent Address",
  aadhaar: "Aadhaar",
  pan: "PAN",
  empType: "Employment Type",
  company: "Company / Business",
  businessAddress: "Business Address",
  bankName: "Bank Name",
  accountNumber: "Account Number",
  ifsc: "IFSC",
  product: "Interested Product",
  occupation: "Occupation",
  remarks: "Remarks",
  rating: "Rating",
  review: "Review",
  role: "City / Role",
  consent: "Consent",
};

// Keys we never want to email (internal/admin-only).
const SKIP = new Set(["id", "status", "time"]);

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export async function POST(req) {
  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, TO_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
    console.error("[lead] SMTP env vars missing");
    return NextResponse.json({ ok: false, error: "Email not configured" }, { status: 500 });
  }

  const source = data.source || "Website Lead";

  // Build the email body from every meaningful field in the payload.
  const rows = Object.entries(data)
    .filter(([k, v]) => !SKIP.has(k) && v !== undefined && v !== null && String(v).trim() !== "" && String(v).trim() !== "—")
    .map(([k, v]) => {
      const label = LABELS[k] || k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
      return { label, value: String(v) };
    });

  const textBody = [
    `New ${source} from the website`,
    "",
    ...rows.map((r) => `${r.label}: ${r.value}`),
    "",
    `Received: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
  ].join("\n");

  const htmlBody = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
      <h2 style="color:#1E5BFF;margin:0 0 4px">New ${esc(source)}</h2>
      <p style="color:#666;margin:0 0 18px;font-size:13px">Submitted via truecapitaladvisory.com</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            (r) =>
              `<tr>
                 <td style="padding:9px 12px;background:#f3f6ff;border:1px solid #e3e9f7;font-weight:600;width:38%;vertical-align:top">${esc(r.label)}</td>
                 <td style="padding:9px 12px;border:1px solid #e3e9f7;white-space:pre-wrap">${esc(r.value)}</td>
               </tr>`
          )
          .join("")}
      </table>
      <p style="color:#999;font-size:12px;margin-top:18px">Received: ${esc(new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }))}</p>
    </div>`;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // 465 = SSL, 587 = STARTTLS
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"True Capital Website" <${FROM_EMAIL || SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? data.email : undefined,
      subject: `New ${source}${data.name ? ` — ${data.name}` : ""}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] sendMail failed:", err?.message || err);
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 502 });
  }
}
