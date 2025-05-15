import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CI/CD with GitHub Actions",
  description: "A Next.js project demonstrating CI/CD pipeline with GitHub Actions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
