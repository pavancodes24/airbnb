import type { Metadata } from "next";
import { Inter,Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Modal actionLabel="Submit" title="Hello world" isOpen/> */}
        <ToasterProvider />
        <LoginModal />
        <RegisterModal/>
        <Navbar />
        <div className="pb-20 pt-28">
        {children}
        </div>

      </body>
    </html>
  );
}
