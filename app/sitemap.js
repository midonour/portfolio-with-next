import { p } from "motion/react-client";

export default function sitemap() {
  const base = "https://www.mohamednour-dev.me/";

  return [{ url: base, lastModified: new Date(), priority: 1 }];
}
