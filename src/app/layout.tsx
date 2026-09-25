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
const display = localFont({
  src: "./fonts/BarlowCondensed-SemiBold.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "600",
});

export const metadata: Metadata = {
  title: "Yacine Salah — Ingénieur Cloud, DevOps & SysOps",
  description:
    "Ingénieur Cloud, DevOps et SysOps à Bondoufle. Automatisation Ansible, architecture GCP et OCI, Terraform, Kubernetes et observabilité. Découvrez mon parcours et mes projets.",
  icons: { icon: "/brand/ys-mark.svg", apple: "/brand/apple-touch-icon.png" },
  openGraph: {
    title: "Yacine Salah — Infrastructure & Cloud",
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
      <body
        className={`${geist.variable} ${mono.variable} ${display.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
