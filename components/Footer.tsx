import React from 'react';

import { socialMedias } from '@/lib/constant';

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-2 flex-wrap items-center justify-center border-t border-blue-gray-50 py-6 text-center md:justify-between px-5">
      <span>Follow us</span>
      <div className="flex gap-4">
        {socialMedias.map(({ name, icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" title={`Visit ${name}'s profile`}>
            <i
              className={`fab fa-${icon} fa-lg hover:text-cherry drop-shadow cursor-pointer hover:scale-110 transition-all duration-75 ease-in-out text-black`}
            />
          </a>
        ))}
      </div>
      <div>
        <div color="blue-gray" className="font-semibold">
          &copy; 2023 All Rights Reserved BM Films
        </div>
        <div color="blue-gray" className="text-xs inline-flex items-center w-full gap-1">
          Designed & Developed with
          <svg className="h-3 w-3 fill-cherry" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path>
          </svg>
          by
          <a href="https://www.linkedin.com/in/bansimangukiya/" target="_blank" rel="noopener noreferrer">
            Bansi Mangukiya
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
