import { p } from "motion/react-client";

export default function sitemap() {
  const base = "https://mohamed-nour.vercel.app";

  return [{ url: base, lastModified: new Date(), priority: 1 }];
}
