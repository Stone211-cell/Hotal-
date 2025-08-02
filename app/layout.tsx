import type { Metadata } from "next";

import "./globals.css";
import "@/lib/fontawesome";
import HeadderNavbar from "@/components/NavbarLink/HeadderNavbar";
import Footerbar from "@/components/FooterLink/Footerbar";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["200", "400", "700"],
});


export const metadataBase = new URL("https://xn--12cli4ea7apbo8ioaeft01a.com/");

export const metadata: Metadata = {
  title:
    "SunseaviewResidence",
  description:
    " ",
  keywords: [
    ""
  ],

  icons: {
    icon: "/images/service/LOGO.jpg",
    apple: "/images/service/LOGO.jpg",
    shortcut: "/images/service/LOGO.jpg",
  },

  openGraph: {
    title:
      "SunseaviewResidence",
    description:
      " ",
    url: "https://xn--12cli4ea7apbo8ioaeft01a.com/",
    type: "website",
    images: [
      {
        url: "/images/service/LOGO.jpg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
     "SunseaviewResidence",
    description:
      " ",
    images: ["/images/service/LOGO.jpg"],
  },

  other: {
    charset: "UTF-8",
    canonical: "https://xn--12cli4ea7apbo8ioaeft01a.com/",
  },
};


// แยก export viewport ออกมาต่างหาก (Next.js แนะนำแบบนี้)
export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={kanit.className}>
      <body
      >
        <HeadderNavbar />
        {children}
        <Footerbar />
      </body>
    </html>
  );
}
