import "./globals.css";
import React from "react";
import { Roboto } from "next/font/google";
import { Layout } from "../components/layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: "Cherry Films",
  description:
    "Cherry Films is a cutting-edge media production company based in Mumbai, specializing in creating engaging content for various platforms. Our talented team produces high-quality videos, animations, and multimedia content to captivate your audience. Explore our TV Commercials, Social Media Ads, Corporate Films, 2D & 3D Animation, and more. Partner with us for visually stunning and highly effective content tailored to your brand, products, or storytelling needs.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={roboto.className}>
        <Navbar />
        <Layout>{children}</Layout>
        <Footer />
        <ScrollToTopButton />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
