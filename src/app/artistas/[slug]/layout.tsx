import type { Metadata } from "next";
import artistasData from "@/data/artistas.json";

export function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Metadata {
  const artista = artistasData.find((a) => a.slug === params.slug);
  
  // Fallback: si no encuentra artista, no sobrescribe metadata (hereda del layout padre)
  if (!artista) {
    return {};
  }

  return {
    title: `${artista.name} en REVE FEST 2026 | Festival Musical Solidario`,
    description: `No te pierdas a ${artista.name} en REVE FEST 2026. El único festival de música urbana solidario en Valencia. 16 julio 2026, Roig Arena.`,
    openGraph: {
      title: `${artista.name} en REVE FEST 2026`,
      description: `No te pierdas a ${artista.name} en REVE FEST 2026`,
      images: [{
        url: artista.images.pagina,
        width: 1200,
        height: 800,
        alt: `${artista.name} - REVE FEST 2026`,
      }],
      type: "article",
      locale: "es_ES",
      siteName: "REVE FEST",
    },
    twitter: {
      card: "summary_large_image",
      title: `${artista.name} en REVE FEST 2026`,
      description: `No te pierdas a ${artista.name} en REVE FEST 2026`,
      images: [artista.images.pagina],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
