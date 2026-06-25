import { COMPANY, DSA_TYPES } from "@/lib/data";

// Generated at /sitemap.xml
export default function sitemap() {
  const base = COMPANY.url;
  const now = new Date();

  // [path, changeFrequency, priority]
  const staticRoutes = [
    ["", "weekly", 1.0],
    ["/about", "monthly", 0.8],
    ["/services", "monthly", 0.9],
    ["/calculator", "monthly", 0.7],
    ["/cibil", "monthly", 0.7],
    ["/apply", "monthly", 0.9],
    ["/dsa", "monthly", 0.8],
    ["/reviews", "monthly", 0.6],
    ["/blog", "weekly", 0.7],
    ["/contact", "monthly", 0.7],
    ["/privacy", "yearly", 0.3],
    ["/terms", "yearly", 0.3],
    ["/disclaimer", "yearly", 0.3],
    ["/grievance", "yearly", 0.3],
  ];

  const pages = staticRoutes.map(([path, changeFrequency, priority]) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const dsaPages = DSA_TYPES.map((d) => ({
    url: `${base}/dsa/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...dsaPages];
}
