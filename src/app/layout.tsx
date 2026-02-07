import type { Metadata } from "next";
import "./globals.css";
import InstallPWA from "../components/InstallPWA";

export const metadata: Metadata = {
  title: "SplitTrip - Smart Expense Splitter",
  description: "Split trip expenses effortlessly with friends",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#EBE7DC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/icons/app-logo-192.png" type="image/x-icon"/>
        <meta/>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');
        </style>
      </head>
      <body className="bg-(--layout-bg) min-h-screen">
        {children}
        <InstallPWA />
      </body>
    </html>
  );
}
