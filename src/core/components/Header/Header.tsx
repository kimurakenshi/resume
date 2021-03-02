import styles from './Header.module.scss';
import { ThemeSwitcher } from '../../theme';
import classNames from 'classnames';
import { Logo } from '../../../components';

const Header = () => (
  <header
    className={classNames(
      'flex justify-between items-center bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white',
      styles.header
    )}
  >
    <div className={classNames('text-white opacity-80', styles.header__logo)}>
      <Logo customClasses="text-green-300" />
    </div>

    <h1 className="capitalize font-default text-xl md:text-3xl">
      Sebasti&aacute;n Giraudo
    </h1>

    <ThemeSwitcher />
  </header>
);

export default Header;
