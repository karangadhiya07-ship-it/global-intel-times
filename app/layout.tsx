import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Global Intel Times | Original Journalism & Global Analysis",
    template: "%s | Global Intel Times",
  },
  description:
    "Global Intel Times delivers original reporting and analysis on world affairs, business, technology, finance, and opinion.",
  metadataBase: new URL("https://globalinteltimes.com"),
  openGraph: {
    title: "Global Intel Times",
    description:
      "Original journalism and global perspective on the stories that matter.",
    type: "website",
    locale: "en_US",
    siteName: "Global Intel Times",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
