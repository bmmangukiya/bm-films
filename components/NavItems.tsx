import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export const NavItems = ({ isScrolling, isSmall = false }) => {
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
                <div className="relative">
                  <button
                    onClick={() => setOpen(!open)}
                    className="hover:text-cherry hover:tracking-wider hover:font-medium transition-all flex items-center"
                  >
                    <span>{name}</span>
                    <i className={`fa-solid fa-chevron-down fa-xs ml-2 transition-transform ${open ? 'rotate-180' : ''}`}></i>
                  </button>
                  {open && (
                    <div
                      className={`absolute left-0 mt-7 w-32  shadow-lg rounded-lg z-10 ${isScrolling ? 'text-black bg-white' : 'text-white bg-transparent'}`}
                    >
                      {ourServicesSubMenu.map(({ name, href = '' }, index) => (
                        <Link
                          href={href}
                          key={index}
                          className={`block px-4 py-2 hover:text-cherry transition-all ${isScrolling ? 'text-black' : 'text-white'}`}
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
};
