'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Menu, MenuList, MenuHandler } from '@material-tailwind/react';

import CherryFilmaLogo from './../public/logo.png';
import ScrollLink from './ScrollLink';

import { socialMedias } from '@/lib/constant';

const NAV_MENU = [
  {
    name: 'Home',
    href: '/',
    scrollToSelector: '#home-section'
  },
  {
    name: 'About',
    href: '/',
    scrollToSelector: '#about-section'
  },
  { name: 'Our Services', href: '/ourservices/films', scrollToSelector: '' },
  { name: 'Contact Us', href: '/', scrollToSelector: '#contact-section' }
];
const ourServicesSubMenu = [
  { name: 'Films', href: '/ourservices/films' },
  {
    name: 'Photoshoots',
    href: '/ourservices/photoshoots'
  },
  { name: 'Events', href: '/ourservices/events' }
];

const NavItems = ({ isScrolling, isSmall = false }) => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  return (
    <>
      {NAV_MENU.map(({ name, href = '', scrollToSelector }, index) => {
        if (name !== 'Our Services') {
          return (
            <ScrollLink href={href} scrollToSelector={scrollToSelector} pagePath={path} key={index + name}>
              <span className={`hover:text-cherry hover:tracking-wider hover:font-medium transition-all ${isSmall ? 'text-xl' : ''}`}>
                {name}
              </span>
            </ScrollLink>
          );
        } else {
          return (
            <div role="navigation" aria-label="Our Services" key={index + name}>
              {isSmall ? (
                <div className="flex flex-col gap-4 w-32 border-0 text-black">
                  {ourServicesSubMenu.map(({ name, href = '' }, index) => (
                    <Link
                      href={href}
                      key={index}
                      className={`hover:text-cherry hover:tracking-wider hover:font-medium transition-all w-full outline-none ${
                        isSmall ? 'text-xl' : ''
                      } ${isScrolling ? 'text-black' : 'text-white'}`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Menu open={open} handler={setOpen} allowHover onMouseLeave={() => setOpen(false)}>
                  <MenuHandler>
                    <span
                      role="button"
                      aria-expanded={open}
                      aria-haspopup="true"
                      className={`hover:text-cherry hover:tracking-wider hover:font-medium transition-all `}
                      onMouseOver={() => setOpen(true)}
                    >
                      <div className="flex items-center gap-1">
                        {name}
                        <i className={`fa-solid fa-chevron-down fa-xs transition-transform ${open ? 'rotate-180' : ''}`}></i>
                      </div>
                    </span>
                  </MenuHandler>
                  <MenuList
                    className={`flex flex-col gap-2 w-32 text-center border-0 z-[999999] ${
                      isScrolling ? 'shadow-md shadow-gray-500 bg-white mt-6' : 'shadow-none bg-transparent'
                    }`}
                  >
                    {ourServicesSubMenu.map(({ name, href = '' }, index) => (
                      <Link
                        href={href}
                        key={index}
                        className={`hover:text-cherry hover:tracking-wider hover:font-medium transition-all w-full outline-none ${
                          isScrolling ? 'text-black' : 'text-white'
                        }`}
                      >
                        {name}
                      </Link>
                    ))}
                  </MenuList>
                </Menu>
              )}
            </div>
          );
        }
      })}
    </>
  );
};

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
        isScrolling ? 'bg-white shadow-lg' : 'bg-transparent pt-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5">
        <ScrollLink href="/">
          <Image src={CherryFilmaLogo} alt={'Cherry Films Logo'} className="" />
        </ScrollLink>
        <div className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? 'text-dark' : 'text-white'}`}>
          <NavItems isScrolling={isScrolling} />
        </div>
        <div className="hidden items-center gap-4 lg:flex">
          {socialMedias.map(({ name, icon, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" title={`Visit ${name}'s profile`}>
              <i
                className={`fab fa-${icon} fa-lg hover:text-cherry drop-shadow cursor-pointer hover:scale-110 transition-all duration-75 ease-in-out ${
                  isScrolling ? 'text-black' : 'text-white'
                }`}
              />
            </a>
          ))}
        </div>
        <Menu open={open} handler={setOpen} placement="bottom-end">
          <MenuHandler>
            <div
              variant="text"
              color={isScrolling ? 'gray' : 'white'}
              onClick={() => toggleNavbar()}
              className=" inline-block lg:hidden"
              role="button"
              aria-expanded={open}
              aria-haspopup="true"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'} fa-xl ${isScrolling ? 'text-black' : 'text-white'}`}></i>
            </div>
          </MenuHandler>
          <MenuList className="min-h-fit z-[999999] min-w-max p-5">
            <div className="flex flex-col gap-4 text-gray-900 outline-none">
              <NavItems isSmall={true} />
            </div>

            <div className="mt-6 flex items-center gap-4 flex-wrap">
              {socialMedias.map(({ name, icon, link }, index) => (
                <a key={index} href={link} target="_blank" rel="noopener noreferrer" title={`Visit ${name}'s profile`}>
                  <i
                    className={`fab fa-${icon} fa-xl hover:text-cherry drop-shadow cursor-pointer hover:scale-110 transition-all duration-75 ease-in-out text-black`}
                  />
                </a>
              ))}
            </div>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
