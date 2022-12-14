import classNames from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { GridImage } from './GridImage';
import { GridText } from './GridText';

export default function Grid({ details }: any) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView, animation]);

  return (
    <div
      ref={ref}
      id={details.navigationId}
      className={classNames('flex justify-center py-20 px-0 md:px-10', {
        'bg-gray-800': details.backgroundColor === true,
      })}
    >
      <motion.div
        initial={details.fadeIn ? { opacity: 0 } : { opacity: 1 }}
        animate={details.fadeIn ? animation : { opacity: 1 }}
        className={classNames('grid', {
          [`grid-cols-${details.mobileColumns as string}`]:
            details.mobileColumns,
          [`md:grid-cols-${details.tabletColumns as string}`]:
            details.tabletColumns,
          [`xl:grid-cols-${details.desktopColumns as string}`]:
            details.desktopColumns,
          [`gap-${details.gap as string}`]: details.gap,
          'md:w-10/12': details.fullWidth === false,
        })}
      >
        {details.sections.map((section: any) => {
          return (
            <div
              key={section.id}
              className={classNames('relative', {
                [`order-${section.mobilePosition as string}`]:
                  section.mobilePosition,
                [`md:order-${section.tabletPosition as string}`]:
                  section.tabletPosition,
                [`xl:order-${section.desktopPosition as string}`]:
                  section.desktopPosition,
              })}
            >
              {section.__typename === 'GridImage' ? (
                <GridImage
                  key={section.id}
                  details={details}
                  section={section}
                ></GridImage>
              ) : section.__typename === 'GridText' ? (
                <GridText details={details} section={section}></GridText>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
