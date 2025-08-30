import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Park Group - Events & Catering",
  description: "Your one-stop solution for events and catering services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
