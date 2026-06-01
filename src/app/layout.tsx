import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnBehalf - Find the Perfect Match for Your Single Friend",
  description: "The unique matrimonial platform where friends and family help find suitable marriage partners.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}