import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/Theme-provider";
import { THEME_COLORS } from "@/constants/constants";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Arun's Portfolio",
  description: "This is my portfolio where you find all my work and my experiences in detail",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="dark">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme={THEME_COLORS.DARK}
            enableSystem={false}
            disableTransitionOnChange
          >
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
