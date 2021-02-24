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
        'h-12 transition duration-500 ease-in-out relative flex justify-center items-center px-5 border-b border-gray-300 dark:border-gray-800 z-50',
        styles.nav,
        {
          'bg-gray-200 dark:bg-gray-800 on-background': !isStickyNav,
          'sticky top-0 bg-blue-800 bg-opacity-90 text-white': isStickyNav,
        }
      )}
    >
      <div className={classNames('absolute left-5 ml-2.5', styles.nav__logo)}>
        <Image
          className={classNames('object-contain animate__animated', {
            animate__fadeInDown: isStickyNav,
            animate__fadeOutUp: !isStickyNav,
          })}
          alt="Logo"
          src="/avatar.png"
          layout="fill"
        />
      </div>

      <ul className="flex justify-center items-center h-full md:m-auto">
        <NavLink path="/">01.Me</NavLink>

        <NavLink path="/resume">02.Resume</NavLink>

        <NavLink path="/contact">03.Contact</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
