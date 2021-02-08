import styles from './Nav.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Image from 'next/image';
import classNames from 'classnames';
import { HEADER_HEIGHT } from '../Layout';
import NavLink from './NavLink';
import { useState } from 'react';

const Nav = () => {
  const [isStickyNav, setIsStickyNav] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const shouldMakeNavSticky = currPos.y < -(HEADER_HEIGHT - 20);

      if (shouldMakeNavSticky !== isStickyNav) {
        setIsStickyNav(shouldMakeNavSticky);
      }
    },
    [isStickyNav]
  );

  return (
    <nav
      className={classNames(
        'h-12 transition duration-500 ease-in-out flex items-center px-5 border-b border-gray-300 dark:border-gray-800 ',
        styles.nav,
        {
          'bg-gray-200 dark:bg-gray-900': !isStickyNav,
          'sticky top-0 bg-blue-800 bg-opacity-90 text-white': isStickyNav,
        }
      )}
    >
      <div className={styles.nav__logo}>
        <Image
          className={classNames('object-contain animate__animated', {
            animate__fadeInDown: isStickyNav,
            'animate__fadeOutUp opacity-1': !isStickyNav,
          })}
          alt="Logo"
          src="/avatar.png"
          layout="fill"
        />
      </div>

      <ul className="flex justify-center items-center h-full md:m-auto">
        <NavLink path="/">Me</NavLink>

        <NavLink path="/work-history">Work History</NavLink>

        <NavLink path="/contact">Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
