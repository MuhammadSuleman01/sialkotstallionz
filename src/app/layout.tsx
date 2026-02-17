import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";


export const metadata: Metadata = {
  title: "Sialkot Stallionz",
  description: "Official website of Sialkot Stallionz, the premier cricket team representing Sialkot in domestic and international tournaments.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={"bg-white text-black overflow-x-hidden"}>
        <Navbar />
        <div className="w-full max-w-[1440px] mx-auto overflow-x-hidden">
          {children}
        </div>
        <ToastContainer position="top-right" theme="colored" className={"mt-[85px]"} />
        <Footer />
      </body>
    </html>
  );
}
