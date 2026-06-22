import Link from "next/link";

// Brand lockup used in both the navbar and footer. Theme-aware: the light-theme
// logo (navy art on transparent) and the dark-theme logo (white card) are both
// rendered, and CSS shows the right one based on :root[data-theme]. Toggling is
// pure CSS so it works with the pre-paint theme script — no flash, no JS.
export default function Brand({ logoId = "lg" }) {
  return (
    <Link href="/" className="brand" aria-label="True Capital & Advisory — Home">
      <img
        src="/TC.png"
        alt="True Capital & Advisory — Fast Loan. Trusted Solution."
        className="brand-logo brand-logo-light"
        width={345}
        height={99}
      />
      <img
        src="/TC.Jpeg"
        alt="True Capital & Advisory — Fast Loan. Trusted Solution."
        className="brand-logo brand-logo-dark"
      />
    </Link>
  );
}
