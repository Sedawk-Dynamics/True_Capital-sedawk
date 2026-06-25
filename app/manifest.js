import { COMPANY } from "@/lib/data";

// Generated at /manifest.webmanifest
export default function manifest() {
  return {
    name: COMPANY.name,
    short_name: "True Capital",
    description:
      "Fast loans and trusted financial solutions across India — loans, DSA, insurance & advisory.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0F",
    theme_color: "#0A0A0F",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}
