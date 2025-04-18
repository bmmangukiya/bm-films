'use client';

import React, { MouseEvent, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ScrollLinkProps {
  href: string;
  scrollToSelector?: string;
  children: ReactNode;
  pagePath: string;
}

const ScrollLinkComponent: React.FC<ScrollLinkProps> = ({ href, scrollToSelector, children, pagePath }) => {
  const router = useRouter();

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

    if (pagePath !== href) {
      router.push(href);
      setTimeout(scrollToTarget, 10);
    } else {
      scrollToTarget();
    }
  };

  return (
    <Link href={href} passHref>
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        {children}
      </div>
    </Link>
  );
};

const ScrollLink = React.memo(ScrollLinkComponent);

export default ScrollLink;
