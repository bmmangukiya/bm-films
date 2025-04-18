'use client';

import * as React from 'react';

import { motion, useInView, Variants } from 'framer-motion';

import { cn } from '@/lib/utils';

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  textClassName?: string;
  underlineClassName?: string;
  underlineGradient?: string;
  underlineHeight?: string;
  underlineOffset?: string;
  once?: boolean;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
      duration = 0.5,
      delay = 0.1,
      className,
      textClassName,
      underlineClassName,
      underlineGradient = 'from-indigo-500 via-white to-rose-500',
      underlineHeight = 'h-1',
      underlineOffset = '-bottom-2',
      once = false,
      ...props
    },
    ref
  ) => {
    const localRef = React.useRef(null);
    const inView = useInView(localRef, { once });

    const letters = Array.from(text);

    const container: Variants = {
      hidden: { opacity: 0 },
      visible: (i: number = 1) => ({
        opacity: 1,
        transition: {
          staggerChildren: duration,
          delayChildren: i * delay
        }
      })
    };

    const child: Variants = {
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', damping: 12, stiffness: 200 }
      },
      hidden: {
        opacity: 0,
        y: 20,
        transition: { type: 'spring', damping: 12, stiffness: 200 }
      }
    };

    const lineVariants: Variants = {
      hidden: {
        width: '0%',
        left: '50%'
      },
      visible: {
        width: '100%',
        left: '0%',
        transition: {
          delay: letters.length * delay,
          duration: 0.8,
          ease: 'easeOut'
        }
      }
    };

    return (
      <div
        ref={(node) => {
          localRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement>).current = node;
        }}
        className={cn('flex flex-col items-center justify-center gap-2', className)}
        {...props}
      >
        <div className="relative">
          <motion.div
            style={{ display: 'flex', overflow: 'hidden' }}
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={cn('text-4xl font-bold text-center', textClassName)}
          >
            {letters.map((letter, index) => (
              <motion.span key={index} variants={child}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={lineVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={cn('absolute', underlineHeight, underlineOffset, 'bg-gradient-to-r', underlineGradient, underlineClassName)}
          />
        </div>
      </div>
    );
  }
);

AnimatedText.displayName = 'AnimatedText';

export { AnimatedText };
