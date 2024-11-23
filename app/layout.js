import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/Navbar";
import logo from'../public/assets/logo.png'
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
    <html lang="en">
       <head>
       <link rel="icon" type="image/png" href="/assets/logo1.png" />
      
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
