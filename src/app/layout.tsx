import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://revefest.com"),
  title: "REVE FEST 2026 | Festival Musical Solidario en Valencia | María Becerra en el Roig Arena",
  description: "El único festival de música urbana solidario. Todo el beneficio va a microconciertos® para salud mental. 16 julio 2026, Roig Arena Valencia.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/icon1.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "REVE FEST 2026 | Festival Musical Solidario en Valencia | María Becerra en el Roig Arena",
    description: "El único festival de música urbana solidario. Todo el beneficio va a microconciertos® para salud mental. 16 julio 2026, Roig Arena Valencia.",
    images: [
      {
        url: "/images/artists/Hero/bannerweb_general.webp",
        width: 1200,
        height: 630,
        alt: "REVE FEST 2026 - Festival Musical Solidario en Valencia",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
