import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TransitStay",
  description: "The next generation traveling guide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
