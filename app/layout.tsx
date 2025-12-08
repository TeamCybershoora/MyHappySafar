// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import NavbarTop from "@/components/NavbarTop";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "The Happy Safar",
  description: "Experience the best tours and taxi services in Rajasthan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <NavbarTop />
        <Navbar />
        <main className="pt-32"> {/* Updated padding to account for both Navbars */}
          {children}
        </main>
      </body>
    </html>
  );
}