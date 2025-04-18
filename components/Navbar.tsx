'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { socialMedias } from '@/lib/constant';

import { NavItems } from './NavItems';
import ScrollLink from './ScrollLink';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

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
  }, [setOpen, setIsScrolling]);

  const toggleNavbar = () => setOpen((prev) => !prev);

  return (
    <div
      className={`fixed top-0 z-[9999] border-0 transition-all ease-in-out duration-500 delay-0 w-full p-2 ${
        isScrolling ? 'bg-black shadow-lg' : 'bg-transparent pt-4'
      }`}
    >
      <div className="container mx-auto flex items-center px-5">
        <ScrollLink href="/" pagePath="/">
          <Image src="/bm-films.svg" alt={'Cherry Films Logo'} width={95} height={25} className="h-8 w-28" />
        </ScrollLink>
        <div className={`ml-10 hidden items-center gap-6 lg:flex mr-auto text-white`}>
          <NavItems isScrolling={isScrolling} />
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          {socialMedias.map(({ name, icon, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" title={`Visit ${name}'s profile`}>
              <i
                className={`fab fa-${icon} fa-lg hover:text-cherry drop-shadow cursor-pointer hover:scale-110 transition-all duration-75 ease-in-out text-white`}
              />
            </a>
          ))}
        </div>
        <button className={`inline-block lg:hidden text-white`} onClick={toggleNavbar} aria-expanded={open}>
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} fa-xl`}></i>
        </button>
        {open && (
          <div className="lg:hidden absolute left-0 top-0 w-full bg-black z-50">
            <NavItems isSmall={true} isScrolling={isScrolling} />
            <div className="mt-6 flex items-center gap-4 flex-wrap">
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
}

export default Navbar;
