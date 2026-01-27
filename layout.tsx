import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aj.g",
  description: "Front-end Developer / UI Designer Portfolio",
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