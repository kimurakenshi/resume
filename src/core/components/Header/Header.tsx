import styles from './Header.module.scss';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { HEADER_HEIGHT } from '../Layout';
import { ThemeSwitcher } from '../../theme';

const Header = () => {
  const [isCondensed, setIsCondensed] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    const isCondensedHeader = currPos.y < -(HEADER_HEIGHT / 2);

    if (isCondensedHeader !== isCondensed) {
      setIsCondensed(isCondensedHeader);
    }
  });

  return (
    <header
      className={classNames(styles.header, {
        [styles.header__condensed]: isCondensed,
      })}
    >
      <div className="flex justify-between items-center">
        <div
          className={classNames(styles.header__logo, {
            [styles['header__logo--small']]: isCondensed,
          })}
        >
          <Image
            className="object-contain"
            alt="Logo"
            src="/logo.svg"
            layout="fill"
          />
        </div>

        <h2 className="sans-font">Nav Goes Here</h2>

        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
