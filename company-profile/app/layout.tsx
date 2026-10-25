import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: { default: "Kopi Nusantara", template: "%s | Kopi Nusantara" },
  description: "Single-origin Indonesian coffee, roasted fresh.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}