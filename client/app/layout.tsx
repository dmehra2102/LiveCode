import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { calSans, firaCode, inter, playwriteEngland } from "./fonts";

export const metadata: Metadata = {
  title: "LiveCode",
  description: "Created for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calSans.variable} ${firaCode.variable} ${playwriteEngland.className} antialiased relative`}
      >
        <Header />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
