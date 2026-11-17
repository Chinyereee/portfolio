import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://chinyere-dev.vercel.app/";
const TITLE = "Chinyere John-Nnah — Software Engineer";
const DESC =
  "Software Engineer in Port Harcourt, Nigeria building fast, accessible websites and web apps with React, Next.js, TypeScript and Node.js";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE },
  openGraph: { type: "website", url: SITE, title: TITLE, description: DESC },
  twitter: { card: "summary", title: TITLE, description: DESC },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%23b49aff'/><text x='32' y='44' font-family='sans-serif' font-size='30' font-weight='700' fill='%230b1020' text-anchor='middle'>CJ</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1020",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
