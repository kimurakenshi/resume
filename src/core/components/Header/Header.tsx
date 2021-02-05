import styles from './Header.module.scss';
import Image from 'next/image';
import { ThemeSwitcher } from '../../theme';
import classNames from 'classnames';

const Header = () => (
  <header
    className={classNames(
      'flex justify-between items-center bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800',
      styles.header
    )}
  >
    <div className={styles.header__logo}>
      <Image
        className="object-contain"
        alt="Logo"
        src="/avatar.png"
        layout="fill"
      />
    </div>

    <h1 className="capitalize font-default text-3xl">
      Sebasti&aacute;n Giraudo
    </h1>

    <ThemeSwitcher />
  </header>
);

export default Header;
