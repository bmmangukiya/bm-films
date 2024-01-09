import React from "react";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Hero from "./Hero";
import OurServices from "../components/OurServices";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <OurServices />
      <AboutUs />
      <ContactUs />
    </div>
  );
}
