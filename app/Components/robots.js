export default function robots() {
  const baseUrl = "https://mohamed-nour.vercel.app/";

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