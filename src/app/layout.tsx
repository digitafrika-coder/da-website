import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "DigitAfrika — Potência Criativa & Digital Independente | Maputo",
    template: "%s | DigitAfrika",
  },
  description:
    "Unimos marketing, publicidade, programação e produção gráfica para impulsionar marcas, criar experiências e desenvolver soluções de alto impacto global.",
  keywords: [
    "DigitAfrika",
    "Agência Criativa Moçambique",
    "Marketing Digital Maputo",
    "Desenvolvimento Web",
    "Serigrafia e Brindes Maputo",
    "Branding",
    "Design",
  ],
  authors: [{ name: "DigitAfrika Digital Ltd." }],
  creator: "DigitAfrika",
  metadataBase: new URL("https://digitafrika.com"),
  openGraph: {
    type: "website",
    locale: "pt_MZ",
    url: "https://digitafrika.com",
    title: "DigitAfrika — Potência Criativa & Digital Independente",
    description:
      "Unimos estratégia, criatividade e tecnologia para impulsionar marcas e desenvolver soluções de alto impacto.",
    siteName: "DigitAfrika",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0C0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-fixed min-h-screen flex flex-col">
        <Header />
        <main className="w-full pt-20 bg-surface min-h-screen flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
