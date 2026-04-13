import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Engenheiro Front-End | React, Next.js, Performance & UX | Paulo Paiva",
  
  description:
    "Engenheiro Front-End especializado em React, Next.js, performance e UX. Desenvolvimento de sistemas web modernos, escaláveis e focados em resultado.",

  keywords: [
    "Front-End",
    "React",
    "Next.js",
    "TypeScript",
    "UX",
    "Performance Web",
    "Desenvolvedor Front-End",
    "Engenheiro Front-End",
    "Paulo Paiva",
  ],

  authors: [{ name: "Paulo Paiva" }],
  creator: "Paulo Paiva",

  metadataBase: new URL("https://paulo-devspace.vercel.app"),

  openGraph: {
    title:
      "Engenheiro Front-End | React, Next.js, Performance & UX | Paulo Paiva",
    description:
      "Desenvolvimento de sistemas web modernos, com foco em performance, UX e escalabilidade.",
    url: "https://paulo-devspace.vercel.app",
    siteName: "Paulo Devspace",
    /* images: [
      {
        url: "/images/og-image.png", // 🔥 criar depois
        width: 1200,
        height: 630,
        alt: "Portfólio Paulo Paiva",
      },
    ], */
    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
