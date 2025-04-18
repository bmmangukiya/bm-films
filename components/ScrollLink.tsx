'use client';

import React, { MouseEvent, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface ScrollLinkProps {
  href: string;
  scrollToSelector?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ScrollLinkComponent: React.FC<ScrollLinkProps> = ({ href, scrollToSelector, children, onClick }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const scrollToTarget = () => {
      if (scrollToSelector) {
        const targetElement = document.querySelector(scrollToSelector);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    if (pathname !== href) {
      router.push(href);
      setTimeout(scrollToTarget, 10);
    } else {
      scrollToTarget();
    }
  };

  return (
    <Link href={href} passHref onClick={onClick}>
      <div onClick={handleClick} className="cursor-pointer">
        {children}
      </div>
    </Link>
  );
};

const ScrollLink = React.memo(ScrollLinkComponent);

export default ScrollLink;
