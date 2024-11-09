import StoreProvider from "@/lib/Provider/StoreProvider";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eco Pharmacy",
  description: "Eco Pharmacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="font-questrial">
          <>
            <Toaster position="top-center" />
            {children}
          </>
        </body>
      </html>
    </StoreProvider>
  );
}
