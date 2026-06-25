import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/data";
import { LeadProvider } from "@/lib/LeadContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EmiSideTab from "@/components/EmiSideTab";
import ScrollReveal from "@/components/ScrollReveal";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sora", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });

export const metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "True Capital & Advisory Pvt Ltd — Fast Loan. Trusted Solution.",
    template: "%s | True Capital & Advisory",
  },
  description:
    "True Capital & Advisory Pvt Ltd — Fast loans and trusted financial solutions across India. Home, Personal, Business & MSME loans, LAP, project finance, DSA, insurance & wealth advisory. Quick approval, transparent process.",
  keywords: [
    "loan consulting", "home loan", "personal loan", "MSME loan", "business loan",
    "DSA services", "loan against property", "EMI calculator", "Haridwar", "financial advisory", "private funding",
  ],
  authors: [{ name: "True Capital & Advisory Pvt Ltd", url: COMPANY.url }],
  creator: "True Capital & Advisory Pvt Ltd",
  publisher: "True Capital & Advisory Pvt Ltd",
  applicationName: "True Capital & Advisory",
  category: "Finance",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "True Capital & Advisory",
    title: "True Capital & Advisory Pvt Ltd — Fast Loan. Trusted Solution.",
    description: "Fast loans and trusted financial solutions across India. Quick approval, transparent process, pan-India support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "True Capital & Advisory Pvt Ltd",
    description: "Fast Loan. Trusted Solution. Loans & financial advisory across India.",
  },
  // Add your Google Search Console token here once you verify the domain:
  // verification: { google: "YOUR_GOOGLE_SITE_VERIFICATION_TOKEN" },
};

export const viewport = {
  themeColor: "#0A0A0F",
};

// Organisation / LocalBusiness structured data for rich results & local SEO.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${COMPANY.url}/#organization`,
  name: COMPANY.name,
  url: COMPANY.url,
  logo: `${COMPANY.url}/TC.png`,
  image: `${COMPANY.url}/TC.png`,
  description:
    "Loan advisory, DSA services and financial solutions — home, personal, business & MSME loans, LAP, project finance, insurance and wealth advisory across India.",
  telephone: COMPANY.phoneIntl,
  email: COMPANY.email,
  priceRange: "₹₹",
  areaServed: "IN",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2nd Floor, H.No. 2474, Lal Mandir Road, Nikunj Vihar, Arya Nagar",
    addressLocality: "Haridwar",
    addressRegion: "Uttarakhand",
    postalCode: "249407",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: COMPANY.lat, longitude: COMPANY.lng },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`} suppressHydrationWarning>
      {/*
        Analytics & tracking integration points (paste your tags here):
        - Google Analytics (GA4): add <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"/> + config
        - Meta (Facebook) Pixel: fbq('init','YOUR_PIXEL_ID'); fbq('track','PageView');
        - Google Ads conversion: gtag('event','conversion',{ send_to:'AW-XXXX/XXXX' });
        Use next/script with strategy="afterInteractive".
      */}
      <body>
        {/* Organisation / LocalBusiness structured data (rich results + local SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* set theme before first paint — defaults to light, remembers the user's choice */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('tc-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}`,
          }}
        />
        <LeadProvider>
          <Navbar />
          <ScrollReveal />
          <main className="page-enter">{children}</main>
          <Footer />
          <EmiSideTab />
          <FloatingButtons />
        </LeadProvider>
      </body>
    </html>
  );
}
