import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Circo Pequeño Más Grande del Mundo",
  description: "El espectáculo más íntimo y asombroso del mundo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preload crítico para evitar FOUC */}
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="antialiased bg-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}