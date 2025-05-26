import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom-components/Navbar";
import Footer from "@/components/custom-components/Footer";
import { ThemeProvider } from "@/components/custom-components/Theme/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom-components/Sidebar/app-sidebar";
import { QueryClientProvider } from "@tanstack/react-query";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Me Commerce",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider className="flex flex-col" defaultOpen={false}>
            <header>
              <AppSidebar />
              <Navbar />
            </header>
            <main>{children}</main>
          </SidebarProvider>
          <footer className="">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
