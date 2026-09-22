import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelvann Group Of Companies Nigeria Limited | Building the Future of Industry",
  description: "The Corporate Home of Kelvann Group's Diverse Subsidiaries",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="bg-white text-[#142B4D] antialiased">
        {children}
      </body>
    </html>
  );
}