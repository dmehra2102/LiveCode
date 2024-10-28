import localFont from "next/font/local";
import { Inter, Fira_Code } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
});

export const playwriteEngland = localFont({
  src: [
    {
      path: "./fonts/PlaywriteGBS-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PlaywriteGBS-VariableFont_wght.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/PlaywriteGBS-VariableFont_wght.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/PlaywriteGBS-VariableFont_wght.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/PlaywriteGBS-Italic-VariableFont_wght.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/PlaywriteGBS-Italic-VariableFont_wght.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/PlaywriteGBS-Italic-VariableFont_wght.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/PlaywriteGBS-Italic-VariableFont_wght.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});
