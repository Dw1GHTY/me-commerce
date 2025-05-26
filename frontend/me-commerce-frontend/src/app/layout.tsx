import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/custom-components/Theme/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom-components/Sidebar/app-sidebar";
import Footer from "@/components/custom-components/Footer";
import Navbar from "@/components/custom-components/Navbar";
import ReactQueryProvider from "@/components/custom-components/ReactQueryProvider";

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
          <ReactQueryProvider>
            <SidebarProvider className="flex flex-col" defaultOpen={false}>
              <header>
                <AppSidebar />
                <Navbar />
              </header>
              <main>{children}</main>
            </SidebarProvider>
          </ReactQueryProvider>
          <footer className="">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
