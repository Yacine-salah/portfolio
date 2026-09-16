import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yacine Salah — Ingénieur Cloud & DevOps",
  description:
    "Ingénieur Cloud, DevOps et DataOps en Île-de-France. Architecture GCP et OCI, Terraform, Kubernetes, CI/CD et observabilité. Découvrez mon parcours et mes projets.",
  icons: { icon: "/brand/ys-mark.svg", apple: "/brand/apple-touch-icon.png" },
  openGraph: {
    title: "Yacine Salah — Le cloud. Le code. Le concret.",
    description:
      "Des infrastructures fiables, des déploiements automatisés et une culture de la production.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geist.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
