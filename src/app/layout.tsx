import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Radley } from "next/font/google";
import "./globals.css";
import DrawerNavigation from "@/components/DrawerNavigation";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const radley = Radley({
  subsets: ["latin"],
  variable: "--font-radley",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Rachid Ezzahraouy | Lead Developer",
  description: "Portfolio of Rachid Ezzahraouy, Lead Developer at OS Websolutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${radley.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <DrawerNavigation />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
