'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { socialMedias } from '@/lib/constant';

import { NavItems } from './NavItems';
import ScrollLink from './ScrollLink';

const Navbar = React.memo(() => {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => setOpen((prev) => !prev);

  return (
    <div
      className={`fixed top-0 z-[9999] transition-all ease-in-out duration-500 w-[100dvw] bg-black flex justify-center p-2 py-4 ${
        isScrolling ? 'bg-black shadow-lg' : 'lg:bg-transparent'
      }`}
    >
      <div className="container flex align-middle px-4 sm:px-5">
        <ScrollLink href="/" onClick={() => setOpen(false)} scrollToSelector="#home-section">
          <Image src="/bm-films.svg" alt={'BM Films Logo'} width={95} height={25} className="h-8 w-9" />
        </ScrollLink>

        {/* Desktop nav */}
        <div className={`ml-10 hidden items-center gap-6 lg:flex mr-auto text-white`}>
          <NavItems isScrolling={isScrolling} onItemClick={() => setOpen(false)} />
        </div>

        {/* Desktop social */}
        <div className="hidden items-center gap-4 lg:flex">
          {socialMedias.map(({ name, icon, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" title={`Visit ${name}'s profile`}>
              <i
                className={`fab fa-${icon} fa-lg hover:text-cherry drop-shadow cursor-pointer hover:scale-110 transition-all duration-75 ease-in-out text-white`}
              />
            </a>
          ))}
        </div>

        {/* Hamburger menu */}
        <button className="inline-block lg:hidden text-white ml-auto" onClick={toggleNavbar} aria-expanded={open}>
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} fa-xl`}></i>
        </button>

        {/* Mobile nav dropdown */}
        {open && (
          <div ref={menuRef} className="lg:hidden absolute right-0 top-16 w-full bg-black z-50 px-4 sm:px-5 border-t border-white">
            <NavItems isSmall={true} isScrolling={isScrolling} onItemClick={() => setOpen(false)} />
            <div className="mt-4 flex gap-6 flex-wrap p-2 pb-6">
              {socialMedias.map(({ name, icon, link }, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer" title={`Visit ${name}'s profile`}>
                  <i
                    className={`fab fa-${icon} fa-xl hover:text-cherry drop-shadow cursor-pointer hover:scale-110 transition-all duration-75 ease-in-out text-white`}
                  />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Navbar;
