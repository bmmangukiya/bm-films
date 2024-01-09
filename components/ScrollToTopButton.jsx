"use client";
import React, { useState, useEffect } from "react";
// import { ArrowUpIcon } from "@heroicons/react/24/outline";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-all duration-300`}
      title="Scroll To Top"
    >
      <button
        onClick={scrollToTop}
        className="bg-dark text-light p-2.5 px-4 rounded-full focus:outline-none shadow hover:scale-105 transition-transform duration-200"
        aria-label="Scroll to Top"
      >
        <i className="fa-solid fa-arrow-up fa-lg"></i>
      </button>
    </div>
  );
};

export default ScrollToTopButton;
