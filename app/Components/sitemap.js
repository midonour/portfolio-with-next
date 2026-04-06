export default function sitemap() {
  const base = "https://mohamed-nour.vercel.app";

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}#About`, lastModified: new Date() },
    { url: `${base}#Work`, lastModified: new Date() },
    { url: `${base}#Contact`, lastModified: new Date() },
    { url: `${base}#Skills`, lastModified: new Date() },
    { url: `${base}#Home`, lastModified: new Date() },
  ];
}