import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/Theme-provider";
import { THEME_COLORS } from "@/constants/constants";

export const metadata: Metadata = {
  title: "Arun's Portfolio",
  description: "This is my portfolio where you find all my work and my experiences in detail",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="dark">
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
