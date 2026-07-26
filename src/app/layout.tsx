import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0C0C0C",
};

export const metadata: Metadata = {
  title: "E. Sathyanesar | Full-Stack Developer & AI Engineer",
  description: "Official portfolio of E. Sathyanesar showcasing Full-Stack Development, AI Engineering, Machine Learning, Automation, Java, Python, React, PostgreSQL, and Software Engineering projects.",
  keywords: [
    "E. Sathyanesar",
    "Sathyanesar",
    "Sathyanesar Portfolio",
    "E Sathyanesar",
    "Sathya Nesar",
    "Sathyanesar Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Software Engineer",
    "Computer Science Engineering Student",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Java Developer",
    "PostgreSQL",
    "Machine Learning",
    "Data Analytics",
    "Cybersecurity"
  ],
  authors: [{ name: "E. Sathyanesar", url: "https://sathyanesar-portfolio.vercel.app" }],
  creator: "E. Sathyanesar",
  metadataBase: new URL("https://sathyanesar-portfolio.vercel.app"),
  alternates: {
    canonical: "https://sathyanesar-portfolio.vercel.app",
  },
  openGraph: {
    title: "E. Sathyanesar | Full-Stack Developer & AI Engineer",
    description: "Official portfolio of E. Sathyanesar showcasing Full-Stack Development, AI Engineering, Machine Learning, Automation, Java, Python, React, PostgreSQL, and Software Engineering projects.",
    url: "https://sathyanesar-portfolio.vercel.app",
    siteName: "E. Sathyanesar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E. Sathyanesar | Full-Stack Developer & AI Engineer",
    description: "Official portfolio of E. Sathyanesar showcasing Full-Stack Development, AI Engineering, Machine Learning, Automation, Java, Python, React, PostgreSQL, and Software Engineering projects.",
    creator: "@sathya3103",
  },
  icons: {
    icon: [
      {
        url: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="28" fill="%230C0C0C"/><rect width="90" height="90" x="5" y="5" rx="23" fill="none" stroke="%237C3AED" stroke-width="6"/><text x="50" y="69" font-family="sans-serif" font-weight="900" font-size="60" fill="%23FFFFFF" text-anchor="middle">S</text></svg>`,
        type: "image/svg+xml",
      }
    ]
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sathyanesar-portfolio.vercel.app/#person",
      "name": "E. Sathyanesar",
      "alternateName": ["Sathyanesar", "Sathya Nesar", "E Sathyanesar"],
      "jobTitle": "Full-Stack Developer & AI Engineer",
      "url": "https://sathyanesar-portfolio.vercel.app",
      "sameAs": [
        "https://linkedin.com/in/sathyanesar",
        "https://github.com/sathya3103",
        "https://www.instagram.com/_sathyeah"
      ],
      "knowsAbout": [
        "Full-Stack Web Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Python",
        "Java",
        "React",
        "Next.js",
        "PostgreSQL",
        "Cybersecurity"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sathyanesar-portfolio.vercel.app/#website",
      "url": "https://sathyanesar-portfolio.vercel.app",
      "name": "E. Sathyanesar Portfolio",
      "publisher": {
        "@id": "https://sathyanesar-portfolio.vercel.app/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0C0C0C] w-full max-w-[100vw] overflow-x-hidden text-[#D7E2EA]">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
