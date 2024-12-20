
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rajan Aryal",
  description: "Portfolio site of a Full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
       <link rel="icon"  href="/assets/logo1.png" />
       <link rel="icon" type="image/x-icon" href="/logo2.ico" />

      
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="light" enableSystem={true} attribute="class">
        <Navbar/>
        {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}
