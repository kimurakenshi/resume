import { useTransition, animated, config } from 'react-spring';
import classNames from 'classnames';
import styles from './Background.module.scss';

export interface BackgroundItem {
  background?: string;
  id: number;
  imageUrl?: string;
  classNames?: string;
  dark?: boolean;
  light?: boolean;
}

const Background = ({ currentItemIndex = 0, items = [] }) => {
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

  return (
    <>
      {transitions.map(({ item, props, key }) => {
        const styleProps = {
          ...props,
        };

        if (item.imageUrl) {
          styleProps['background-image'] = `url(${item.imageUrl})`;
        }

        if (item.background) {
          styleProps['background'] = item.background;
        }

        return (
          <animated.div
            key={key}
            className={classNames(
              'absolute h-full w-full top-0 left-0 animate__animated animate__fadeIn bg-cover bg-no-repeat bg-fixed bg-center',
              styles.background,
              {
                [item.classNames]: !!item.classNames,
                [styles['background--dark']]: item.dark,
                [styles['background--light']]: item.light,
              }
            )}
            style={styleProps}
          />
        );
      })}
    </>
  );
};

export default Background;
