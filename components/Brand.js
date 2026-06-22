import Link from "next/link";

// Brand lockup used in both the navbar and footer. The official logo image is a
// full lockup (mark + "TRUE CAPITAL" wordmark + tagline), so it stands alone —
// no separate text. It sits on a light rounded backing so the navy artwork stays
// legible on both the light and dark themes.
export default function Brand({ logoId = "lg" }) {
  return (
    <Link href="/" className="brand" aria-label="True Capital & Advisory — Home">
      <img
        src="/logo.png"
        alt="True Capital & Advisory — Fast Loan. Trusted Solution."
        className="brand-logo"
        width={535}
        height={406}
      />
    </Link>
  );
}
