import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const font = Fira_Sans({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const metadata: Metadata = {
  title: "• devedsonalves",
  description: "My portfolio using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={font.className}>
        <div className="overflow-hidden max-h-screen">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
