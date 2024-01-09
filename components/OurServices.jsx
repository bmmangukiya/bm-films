"use client";
import React from "react";
import CommonHeadings from "./CommonHeadings";
import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <section className="w-screen min-h-screen flex flex-col py-10 gap-10 md:gap-16 lg:gap-20 2xl:gap-28  justify-center items-center bg-[#FAFBFB]">
      <CommonHeadings title={"Our Services"} />
      <div className="flex justify-center items-start gap-5 sm:gap-14 flex-wrap px-8">
        <ServiceCard
          title={"films"}
          url="/ourservices/films"
          bg="/home-films.jpg"
        />
        <ServiceCard
          title={"photoshoots"}
          url="/ourservices/photoshoots"
          bg="/home-photoshoots.jpg"
        />
        <ServiceCard
          title={"events"}
          url="/ourservices/events"
          bg="/home-events.jpg"
        />
      </div>
    </section>
  );
};

export default OurServices;
