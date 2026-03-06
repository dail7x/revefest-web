import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "REVEFEST 2026 | Valencia • Roig Arena",
  description: "Web oficial de REVEFEST 2026 en Valencia. Más de 10h de música en el Roig Arena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[80px] sm:pt-[100px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
