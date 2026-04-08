import "./globals.css";
import ThemesProvider from "./Components/ThemesProvider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL("https://mohamed-nour.vercel.app/"),

  title: {
    default: "Mohamed Nour | Frontend Developer",
    template: "%s | Mohamed Nour",
  },

  description:
    "Mohamed Nour is a Frontend Developer specializing in React, Next.js, and modern web technologies.",

  keywords: [
    "Mohamed Nour",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
  ],

  authors: [{ name: "Mohamed Nour" }],
  creator: "Mohamed Nour",
  publisher: "Mohamed Nour",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Mohamed Nour | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://mohamed-nour.vercel.app/",
    siteName: "Mohamed Nour Portfolio",
    images: [
      {
        url: "/IMG-20231106-WA0018.webp",
        width: 1200,
        height: 630,
        alt: "Mohamed Nour Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohamed Nour | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/IMG-20231106-WA0018.webp"],
  },

  icons: {
    icon: "/IMG-20231106-WA0018.webp",
    shortcut: "/IMG-20231106-WA0018.webp",
    apple: "/IMG-20231106-WA0018.webp",
  },

  alternates: {
    canonical: "https://mohamed-nour.vercel.app/",
  },

  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/IMG-20231106-WA0018.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="j-lQKZViGho6bp7xoX4LBvUzcFl0ckFZUCMJR4TdTjY" />
      </head>
      <body className="min-h-full flex flex-col font-space-grotesk dark:bg-[#131318] ">
        <ThemesProvider>{children}</ThemesProvider>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
