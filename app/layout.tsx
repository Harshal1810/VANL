import type { Metadata } from "next";
import "./globals.css";
import { SelectionProvider } from "./context/SelectionContext";

export const metadata: Metadata = {
  title: "Will You Be My Valentine?",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <SelectionProvider>{children}</SelectionProvider>
      </body>
    </html>
  );
}
