import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://asadbek27.uz"),
  alternates: {
    canonical: "https://asadbek27.uz",
  },
  title: "Asadbek",
  description: "Asadbek, Front-End Software Engineer",
  keywords:
    "Asadbek, Front-end Engineer, Project Leader, Web Development, Software Engineering",
  openGraph: {
    locale: "en_US",
    siteName: "Asadbek",
    type: "website",
    title: "Asadbek",
    description: "Asadbek is a Front-End Software Engineer",
    url: "https://asadbek27.uz",
    images: [
      {
        url: "./logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asadbek",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
