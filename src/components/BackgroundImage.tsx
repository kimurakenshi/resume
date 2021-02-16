import { useTransition, animated, config } from 'react-spring';
import classNames from 'classnames';

interface BackgroundImageItem {
  background?: string;
  id: number;
  imageUrl?: string;
  classNames?: string;
}

const BackgroundImage = ({ currentItemIndex = 0, items = [] }) => {
  const transitions = useTransition(
    items[currentItemIndex],
    (item) => item.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      config: config.molasses,
    }
  );
  return transitions.map(({ item, props, key }) => {
    const styleProps = {
      ...props,
    };

    if (item.imageUrl) {
      styleProps['backgroundImage'] = `url(${item.imageUrl})`;
    }

    if (item.background) {
      styleProps['background'] = item.background;
    }

    if (item.classNames) {
      styleProps['background'] = item.background;
    }

    return (
      <animated.div
        key={key}
        className={classNames(
          `absolute h-full w-full top-0 left-0 animate__animated animate__fadeIn bg-cover bg-no-repeat bg-fixed bg-center ${
            item.classNames || ''
          }`
        )}
        style={styleProps}
      />
    );
  });
};

export default BackgroundImage;
