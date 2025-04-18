'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ScrollLink = ({ href, scrollToSelector, children, pagePath }) => {
  const router = useRouter();

  const handleClick = (event) => {
    event.preventDefault();

    if (pagePath !== href) {
      setTimeout(() => {
        if (scrollToSelector) {
          const targetElement = document.querySelector(scrollToSelector);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 10);
      router.push(href);
    }
    if (scrollToSelector) {
      const targetElement = document.querySelector(scrollToSelector);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Link href={href}>
      <div onClick={handleClick}>{children}</div>
    </Link>
  );
};

export default ScrollLink;
