import React, { useState } from 'react';
import Link from 'next/link';

import ScrollLink from './ScrollLink';

const NAV_MENU = [
  { name: 'Home', href: '/', scrollToSelector: '#home-section' },
  { name: 'About', href: '/', scrollToSelector: '#about-section' },
  { name: 'Our Services', href: '/ourservices/films', scrollToSelector: '' },
  { name: 'Contact Us', href: '/', scrollToSelector: '#contact-section' }
];

const ourServicesSubMenu = [
  { name: 'Films', href: '/ourservices/films' },
  { name: 'Photoshoots', href: '/ourservices/photoshoots' },
  { name: 'Events', href: '/ourservices/events' }
];

type NavItemsProps = {
  isScrolling: boolean;
  isSmall?: boolean;
  onItemClick?: () => void;
};

export const NavItems: React.FC<NavItemsProps> = React.memo(({ isScrolling, isSmall = false, onItemClick }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {NAV_MENU.map(({ name, href = '', scrollToSelector }, index) => {
        if (name !== 'Our Services') {
          return (
            <ScrollLink href={href} scrollToSelector={scrollToSelector} key={index + name}>
              <div
                className={`hover:text-rose-500  hover:font-medium transition-all text-white px-2 pt-4 lg:pt-0 ${isSmall ? 'text-xl' : ''}`}
                onClick={onItemClick}
              >
                {name}
              </div>
            </ScrollLink>
          );
        } else {
          return (
            <div role="navigation" aria-label="Our Services" key={index + name} className="flex">
              {isSmall ? (
                <div className="flex flex-col w-32 border-0 text-black px-2">
                  {ourServicesSubMenu.map(({ name, href = '' }, index) => (
                    <Link
                      href={href}
                      key={index}
                      className={`hover:text-rose-500  hover:font-medium transition-all w-full outline-none text-white pt-4 lg:pt-0 ${
                        isSmall ? 'text-xl' : ''
                      } ${isScrolling ? 'lg:text-black' : ''}`}
                      onClick={onItemClick}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={() => setOpen(!open)}
                    className="hover:text-rose-500  hover:font-medium transition-all flex items-center"
                  >
                    <span>{name}</span>
                    <i className={`fa-solid fa-chevron-down fa-xs ml-2 transition-transform ${open ? 'rotate-180' : ''}`}></i>
                  </button>
                  {open && (
                    <div className={`absolute right-0 mt-6 w-32 shadow-lg rounded-lg z-10 text-white bg-black/50 bg-blend-overlay`}>
                      {ourServicesSubMenu.map(({ name, href = '' }, index) => (
                        <Link
                          href={href}
                          key={index}
                          className={`block px-4 py-2 hover:text-rose-500 transition-all text-white`}
                          onClick={() => {
                            if (onItemClick) onItemClick();
                            setOpen(false);
                          }}
                        >
                          {name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        }
      })}
    </>
  );
});
