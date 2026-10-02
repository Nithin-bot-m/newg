import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Greenroots Training & Placements — Job-Ready Tech Courses in Hyderabad",
  description: "Greenroots is a technology training institute in Hyderabad offering job-ready courses in Power BI, Data Analytics, Business Analysis, DevSecOps and Software Testing — with a free career audit and placement support.",
  keywords: ["Greenroots", "Power BI training", "DevSecOps", "Business Analyst", "Hyderabad training institute", "placement support", "career audit"],
  authors: [{ name: "Green Roots Technologies" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logos/groots-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
