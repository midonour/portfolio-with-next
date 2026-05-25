export default function robots() {
  const baseUrl = "https://www.mohamednour-dev.me/";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}