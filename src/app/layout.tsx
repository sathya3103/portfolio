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
  description: "Portfolio of E. Sathyanesar showcasing Full-Stack Development, AI Engineering, Machine Learning, Automation, Java, Python, React, PostgreSQL, and Software Engineering projects.",
  keywords: [
    "E. Sathyanesar",
    "Sathyanesar",
    "Full-Stack Developer",
    "AI Engineer",
    "Software Engineer",
    "Computer Science Engineering Student",
    "React",
    "Next.js",
    "Python",
    "Java",
    "PostgreSQL",
    "Machine Learning",
    "Data Analytics",
    "Cybersecurity"
  ],
  authors: [{ name: "E. Sathyanesar", url: "https://github.com/sathya3103" }],
  creator: "E. Sathyanesar",
  metadataBase: new URL("https://github.com/sathya3103"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "E. Sathyanesar | Full-Stack Developer & AI Engineer",
    description: "Portfolio of E. Sathyanesar showcasing Full-Stack Development, AI Engineering, Machine Learning, Automation, Java, Python, React, PostgreSQL, and Software Engineering projects.",
    url: "https://github.com/sathya3103",
    siteName: "E. Sathyanesar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E. Sathyanesar | Full-Stack Developer & AI Engineer",
    description: "Portfolio of E. Sathyanesar showcasing Full-Stack Development, AI Engineering, Machine Learning, Automation, Java, Python, React, PostgreSQL, and Software Engineering projects.",
    creator: "@sathya3103",
  },
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>',
        type: 'image/svg+xml',
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.variable}>
      <body className="antialiased bg-[#0C0C0C] w-full max-w-[100vw] overflow-x-hidden text-[#D7E2EA]">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
