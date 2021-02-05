import styles from './Nav.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { HEADER_HEIGHT } from '../Layout';
import Link from 'next/link';

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
        'h-12 transition duration-500 ease-in-out shadow flex items-center px-5',
        styles.nav,
        {
          sticky: isStickyNav,
          'top-0 bg-blue-800 bg-opacity-90': isStickyNav,
        }
      )}
    >
      <div
        className={classNames(styles.nav__logo, {
          'opacity-0': !isStickyNav,
        })}
      >
        <Image
          className="object-contain"
          alt="Logo"
          src="/avatar.png"
          layout="fill"
        />
      </div>

      <ul className="flex justify-center items-center h-full m-auto">
        <li className={styles['nav__item']}>
          <Link href="/">
            <a>Me</a>
          </Link>
        </li>

        <li className={styles['nav__item']}>
          <Link href="/about">
            <a>Work History</a>
          </Link>
        </li>

        <li className={styles['nav__item']}>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
