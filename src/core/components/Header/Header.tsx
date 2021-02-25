import styles from './Header.module.scss';
import { ThemeSwitcher } from '../../theme';
import classNames from 'classnames';
import { Logo } from '../../../components';

const Header = () => (
  <header
    className={classNames(
      'flex justify-between items-center bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 text-white',
      styles.header
    )}
  >
    <div className={classNames('text-white opacity-80', styles.header__logo)}>
      <Logo />
    </div>

    <h1 className="capitalize font-default text-xl md:text-3xl">
      Sebasti&aacute;n Giraudo
    </h1>

    <ThemeSwitcher />
  </header>
);

export default Header;
