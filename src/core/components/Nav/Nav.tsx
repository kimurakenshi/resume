import styles from './Nav.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { HEADER_HEIGHT } from '../Layout';
import { ThemeSwitcher } from '../../theme';

const Nav = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    const shouldMakeNavSticky = currPos.y < -HEADER_HEIGHT;

    if (shouldMakeNavSticky !== isStickyNav) {
      setIsStickyNav(shouldMakeNavSticky);
    }
  });

  return (
    <nav
      className={classNames(
        'h-12 transition duration-500 ease-in-out shadow',
        styles.nav,
        {
          sticky: isStickyNav,
          'top-0 bg-blue-800 bg-opacity-90': isStickyNav,
          // 'bg-gradient-to-r from-blue-800 via-green-700 to-blue-800 bg-opacity-90': isStickyNav,
        }
      )}
    >
      <ul className="flex justify-center items-center h-full">
        <li className={styles['nav__item']}>Me</li>
        <li className={styles['nav__item']}>Work History</li>
        <li className={styles['nav__item']}>Contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
