import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Links | Yohanes Harke Wauran",
  description:
    "Discover links and resources by Yohanes Harke Wauran, Frontend Developer",
  other: {
    "google-site-verification": "X0lvH3-uufEv1uV7gtaPiXp5vylyhJpby_85ztXfsAg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen md:min-h-fit max-w-[480px] mx-auto md:shadow-md md:rounded-xl md:my-3">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
