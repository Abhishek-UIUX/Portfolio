import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Abhishek Jaiswar — Full Stack Developer & Team Lead",
  description:
    "7+ years building enterprise-grade web and mobile applications. Expert in Next.js, React, React Native, Node.js, and Laravel. Based in Mumbai, India.",
  keywords: ["Full Stack Developer", "Next.js", "React", "React Native", "Mumbai", "Team Lead"],
  authors: [{ name: "Abhishek Jaiswar" }],
  openGraph: {
    title: "Abhishek Jaiswar — Full Stack Developer & Team Lead",
    description: "7+ years building scalable enterprise applications.",
    type: "website",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col theme-transition"
        style={{ backgroundColor: "var(--bg-base)", color: "var(--text-primary)" }}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
