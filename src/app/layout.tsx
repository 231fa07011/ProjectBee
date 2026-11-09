import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/common/WhatsAppWidget";

export const metadata: Metadata = {
  title: "ProjectBee | School Projects & Working Science Models (Classes 1–12)",
  description: "India's premier educational platform for CBSE, ICSE, and State Board school science exhibition working models, biology displays, robotics automation kits, and oral viva prompt cards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
