import type { Metadata, Viewport } from "next";
import { Kanit } from "next/font/google";
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
  title: "E. Sathyanesar | Full-Stack Developer",
  description: "Official portfolio of E. Sathyanesar showcasing Full-Stack Development, Machine Learning, Automation, Java, Python, React, PostgreSQL, and Software Engineering projects.",
  keywords: [
    "E. Sathyanesar",
    "Sathyanesar",
    "Sathyanesar Portfolio",
    "E Sathyanesar",
    "Sathya Nesar",
    "Sathyanesar Software Engineer",
    "Full-Stack Developer",
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
    title: "Sathya Nesar | Software Developer Portfolio",
    description: "Explore Sathya Nesar's portfolio featuring software development, Python, Java, AI/ML, AWS cloud projects and technical skills.",
    url: "https://sathyanesar-portfolio.vercel.app/",
    siteName: "Sathya Nesar Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sathya Nesar - Software Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathya Nesar | Software Developer Portfolio",
    description: "Explore Sathya Nesar's portfolio featuring software development, Python, Java, AI/ML, AWS cloud projects and technical skills.",
    creator: "@sathya3103",
    images: ["/og-image.png"],
  },
  verification: {
    google: "V6HAuZN5Iz-G5s-WkBJmoXKBw_8gtWLzMv0eZfrPOeA",
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
      "name": "Sathya Nesar",
      "alternateName": ["E. Sathyanesar", "Sathyanesar"],
      "url": "https://sathyanesar-portfolio.vercel.app",
      "image": "https://sathyanesar-portfolio.vercel.app/sathyanesar_profile.png",
      "affiliation": {
        "@type": "CollegeOrUniversity",
        "name": "Agni College of Technology",
      },
      "sameAs": [
        "https://github.com/sathya3103",
        "https://www.linkedin.com/in/sathyanesar",
      ],
      "knowsAbout": [
        "Software Engineering",
        "Full-Stack Web Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Python",
        "Java",
        "React",
        "Next.js",
        "PostgreSQL",
        "Cybersecurity",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://sathyanesar-portfolio.vercel.app/#website",
      "url": "https://sathyanesar-portfolio.vercel.app",
      "name": "Sathya Nesar Portfolio",
      "description": "Official developer portfolio of Sathya Nesar showcasing software engineering, AI/ML, and web development projects.",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://sathyanesar-portfolio.vercel.app/#person",
      },
      "author": {
        "@id": "https://sathyanesar-portfolio.vercel.app/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://sathyanesar-portfolio.vercel.app/#webpage",
      "url": "https://sathyanesar-portfolio.vercel.app/",
      "name": "Sathya Nesar | Software Developer Portfolio",
      "description": "Explore Sathya Nesar's portfolio featuring software development, Python, Java, AI/ML, AWS cloud projects and technical skills.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://sathyanesar-portfolio.vercel.app/#website",
      },
      "about": {
        "@id": "https://sathyanesar-portfolio.vercel.app/#person",
      },
      "mainEntity": {
        "@id": "https://sathyanesar-portfolio.vercel.app/#person",
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://sathyanesar-portfolio.vercel.app/og-image.png",
        "width": 1200,
        "height": 630,
      },
    },
  ],
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
      </body>
    </html>
  );
}
