import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Park Group - Catering & Events",
  description: "Your one-stop solution for catering and events services.",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      
      <body>{children}</body>
    </html>
  );
}
