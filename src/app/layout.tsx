import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ProjectBee – School Projects Made Easy! | Working Science Models & DIY Kits",
  description: "India's premier e-commerce platform for CBSE & ICSE school science exhibition models, working physics and biology projects, DIY kits, and viva preparation cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
