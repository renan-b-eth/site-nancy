import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "EE Profª Nancy de Oliveira Fidalgo",
    template: "%s | EE Nancy de Oliveira Fidalgo",
  },
  description: "Site oficial da Escola Estadual Professora Nancy de Oliveira Fidalgo. Localizada no Jardim Santa Terezinha, Zona Leste de São Paulo.",
  keywords: ["Escola Nancy", "EE Nancy de Oliveira Fidalgo", "Educação SP", "Zona Leste", "Ensino Técnico"],
  authors: [{ name: "Rendey LLC" }],
  openGraph: {
    title: "EE Profª Nancy de Oliveira Fidalgo",
    description: "Formando cidadãos, transformando futuros na Zona Leste de São Paulo.",
    url: "https://escolanancy.com.br",
    siteName: "EE Nancy",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
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
