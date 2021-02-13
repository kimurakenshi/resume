import { useTransition, animated, config, useSpring } from 'react-spring';
import { useEffect, useState } from 'react';

const Background = ({ currentImageIndex = 0, imgSrcList = [] }) => {
  const transitions = useTransition(
    imgSrcList[currentImageIndex],
    (item) => item.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    }
  );

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="absolute h-full w-full top-0 left-0 animate__animated animate__fadeIn bg-cover bg-no-repeat bg-fixed bg-center"
      style={{
        ...props,
        backgroundImage: `url(${item.url})`,
      }}
    />
  ));
};

export default Background;
