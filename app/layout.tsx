import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lina Kim | Frontend Engineer Portfolio",
  description:
    "Portfolio website for Lina Kim, a frontend engineer specializing in React and Angular with three years of professional experience."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
