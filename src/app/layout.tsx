import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/backgrounds/NoiseOverlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Mazhar Chaudhary | CEO & Healthcare Consultant",
  description: "Premium portfolio of Mazhar Chaudhary, Healthcare Consultant, Philanthropist, and CEO.",
  icons: {
    icon: "/logo-icon.webp",
    apple: "/logo-icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <NoiseOverlay />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
