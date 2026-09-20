import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nikitapatidar1.github.io"),
  title: "Nikita Patidar \u2014 Full Stack Developer",
  description: "Portfolio of Nikita Patidar, a Full Stack Developer in Indore building responsive React interfaces, secure Node.js APIs and optimized database solutions.",
  keywords: ["Nikita Patidar", "Full Stack Developer", "React Developer", "Node.js Developer", "Indore"],
  authors: [{ name: "Nikita Patidar" }],
  creator: "Nikita Patidar",
  openGraph: { title: "Nikita Patidar \u2014 Full Stack Developer", description: "Secure, scalable and user-focused digital products.", type: "website", url: "https://nikitapatidar1.github.io" },
  twitter: { card: "summary", title: "Nikita Patidar \u2014 Full Stack Developer", description: "Secure, scalable and user-focused digital products." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Person", name: "Nikita Patidar", jobTitle: "Full Stack Developer", email: "mailto:patidarnikita008@gmail.com", telephone: "+91 70240 53902", address: { "@type": "PostalAddress", addressLocality: "Indore", addressRegion: "Madhya Pradesh", addressCountry: "IN" }, sameAs: ["https://github.com/nikitapatidar1", "https://www.linkedin.com/in/nikita-patidar-590052254"] },
    { "@type": "WebSite", name: "Nikita Patidar \u2014 Portfolio", url: "https://nikitapatidar1.github.io", author: { "@type": "Person", name: "Nikita Patidar" } },
    { "@type": "CreativeWork", name: "Nikita Patidar Full Stack Portfolio", creator: { "@type": "Person", name: "Nikita Patidar" } },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
