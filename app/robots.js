import { COMPANY } from "@/lib/data";

// Generated at /robots.txt
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // keep the internal admin demo out of search results
        disallow: ["/admin"],
      },
    ],
    sitemap: `${COMPANY.url}/sitemap.xml`,
    host: COMPANY.url,
  };
}
