import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
//import { useEffect, useState } from "react";//
import { ThemeProvider } from "./context/ThemeContext";
import { assets } from "@/assets/assets";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Oluwatobiloba Odukoya - Digital CV ",
  description: "Digital CV of Tobi Odukoya — A brief description of what I do.",
  keywords: ["Oluwatobiloba Odukoya", "CV", "resume", "portfolio", "geologist", "geochemist", "geotechnical engineer", 
    "earth science", "GIS"],
  openGraph: {
    url: "https://tobi-mvo.github.io/Projects/",
    type: "website",
    locale: "en_DE",
    images: [
      {
        url: "https://tobi-mvo.github.io/Projects/header.jpg",
        width: 1200,
        height: 630,
        alt: "Logo of My Site",
        type: "image/jpeg",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden bg-white dark:bg-darkTheme text-black dark:text-white`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}