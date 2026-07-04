import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE NAVIGATOR™ | Enterprise Preview",
  description: "Navigator OS Enterprise Preview by Genesis Security Solutions"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
