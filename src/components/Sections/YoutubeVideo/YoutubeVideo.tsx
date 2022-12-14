import classNames from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export default function YoutubeVideoRecord({ details }: any) {
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
      className={classNames('flex justify-center px-2 py-10 md:px-10', {
        'bg-gray-800': details.backgroundColor === true,
        'bg-gray-200': details.backgroundColor === false,
      })}
    >
      <motion.div
        initial={details.fadeIn ? { opacity: 0 } : { opacity: 1 }}
        animate={details.fadeIn ? animation : { opacity: 1 }}
        className='mx-auto w-full max-w-4xl py-8'
      >
        <div
          className={classNames('shadow-x1 rounded-lg  p-2 md:p-4', {
            'bg-gray-200': details.backgroundColor === true,
            'bg-white': details.backgroundColor === false,
          })}
        >
          <LiteYouTubeEmbed id={details.link.providerUid} title='Play' />
        </div>
      </motion.div>
    </div>
  );
}
