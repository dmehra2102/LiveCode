import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { calSans, firaCode, inter, playwriteEngland } from "./fonts";
import { AppProvider } from "@/contexts/AppContext";

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
        {" "}
        <AppProvider>
          <Header />
          <main className="pt-16">{children}</main>
        </AppProvider>
        <Toaster />
      </body>
    </html>
  );
}
