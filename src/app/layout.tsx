import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";
import Portal from "@/components/common/Portal";
import Navbar from "@/components/common/Navbar";
import ScrollTop from "@/components/common/ScrollTop";
import ContactUs from "@/components/common/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halsey dermatology",
  description: "YOUR TRUSTED HAMPTONS DERMATOLOGY EXPERTS",
  metadataBase: new URL("https://halsey-dermatology-ts.vercel.app/"),
  openGraph: {
    title: "Halsey dermatology",
    description: "YOUR TRUSTED HAMPTONS DERMATOLOGY EXPERTS",
    images: "/assets/images/common/webp/meta.webp",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ContactUs />
        <Portal />
        <Footer />
        <ScrollTop />
        <ToastContainer autoClose={1000} />
      </body>
    </html>
  );
}
