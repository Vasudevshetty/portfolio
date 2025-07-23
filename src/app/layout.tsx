import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vasudevshetty.xyz"),
  title: "Vasudev D M - Full Stack Developer & Technology Officer",
  description:
    "Full Stack Developer and Technology Officer at Fauxigent Innovations. Computer Science Engineering student with expertise in React, Node.js, Python, AI/ML, and DevOps. Winner of Hackfest 2025 National Hackathon.",
  keywords: [
    "Vasudev D M",
    "Full Stack Developer",
    "Technology Officer",
    "Computer Science Engineer",
    "React Developer",
    "Node.js Developer",
    "Python Developer",
    "AI/ML Engineer",
    "DevOps Engineer",
    "JavaScript Developer",
    "TypeScript Developer",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Next.js",
    "Express.js",
    "FastAPI",
    "LangChain",
    "Fauxigent Innovations",
    "JSS Science and Technology University",
    "Hackfest 2025 Winner",
    "Mysuru Developer",
    "Portfolio",
  ],
  authors: [{ name: "Vasudev D M" }],
  creator: "Vasudev D M",
  publisher: "Vasudev D M",
  openGraph: {
    title: "Vasudev D M - Full Stack Developer & Technology Officer",
    description:
      "Full Stack Developer and Technology Officer building scalable solutions with modern technologies. Winner of Hackfest 2025 National Hackathon.",
    url: "https://vasudevshetty.xyz",
    siteName: "Vasudev D M Portfolio",
    images: [
      {
        url: "/portfolio-preview.png",
        width: 1200,
        height: 630,
        alt: "Vasudev D M - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasudev D M - Full Stack Developer & Technology Officer",
    description:
      "Full Stack Developer and Technology Officer building scalable solutions with modern technologies.",
    images: ["/portfolio-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  category: "Technology",
  classification: "Portfolio Website",
  other: {
    "msapplication-TileColor": "#10b981",
    "theme-color": "#10b981",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://vasudevshetty.xyz" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Vasudev D M" />
        <meta name="application-name" content="Vasudev D M Portfolio" />
        <meta
          name="msapplication-tooltip"
          content="Vasudev D M - Full Stack Developer Portfolio"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-navbutton-color" content="#10b981" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vasudev D M",
              jobTitle: "Full Stack Developer & Technology Officer",
              description:
                "Full Stack Developer and Technology Officer at Fauxigent Innovations",
              url: "https://vasudevshetty.xyz",
              sameAs: [
                "https://github.com/vasudevshetty",
                "https://linkedin.com/in/vasudevshetty",
                "https://leetcode.com/vasudevshetty",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Fauxigent Innovations",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "JSS Science and Technology University",
              },
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "Python",
                "React.js",
                "Node.js",
                "Full Stack Development",
                "DevOps",
                "AI/ML",
                "Cloud Computing",
              ],
              award: "Hackfest 2025 National Hackathon Winner",
            }),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
