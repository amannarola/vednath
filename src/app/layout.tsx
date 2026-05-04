import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/WhatsappButton";

export const metadata = {
  title: "Vednath Ayurved",
  description: "Best Ayurvedic treatment and wellness services",
  keywords: ["ayurveda", "health", "herbal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
