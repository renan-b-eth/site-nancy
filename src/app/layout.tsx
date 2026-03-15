import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "E.E. Professora Nancy de Oliveira Fidalgo",
    template: "%s | EE Nancy de Oliveira Fidalgo",
  },
  description: "Site oficial da Escola Estadual Professora Nancy de Oliveira Fidalgo. Localizada no Jardim Santa Terezinha, Zona Leste de São Paulo. Educação pública de qualidade desde 1980.",
  keywords: ["Escola Nancy", "EE Nancy de Oliveira Fidalgo", "Educação SP", "Diretoria Leste 2", "SEDUC", "Ensino Médio", "Ensino Técnico", "Zona Leste SP"],
  authors: [{ name: "Rendey LLC" }],
  creator: "Rendey LLC",
  publisher: "E.E. Professora Nancy de Oliveira Fidalgo",
  openGraph: {
    title: "E.E. Professora Nancy de Oliveira Fidalgo",
    description: "Formando cidadãos, transformando futuros — Zona Leste, São Paulo.",
    url: "https://escolanancy.com.br",
    siteName: "EE Nancy",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E.E. Professora Nancy de Oliveira Fidalgo",
    description: "Formando cidadãos, transformando futuros — Zona Leste, São Paulo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://escolanancy.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
