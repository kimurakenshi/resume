import styles from './Footer.module.scss';
import classNames from 'classnames';
import { appContext } from '../../state';
import { useContext } from 'react';
import { Theme } from '../../theme';

function Footer() {
  const { state } = useContext(appContext);

  return (
    <footer
      className={classNames('text-center', styles.footer, {
        'background on-background': state.theme === Theme.DARK,
        'bg-blue-800 bg-opacity-90 text-gray-100': state.theme === Theme.LIGHT,
      })}
    >
      <a
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center text-sm h-full"
      >
        <span className="text-sm mr-1">Powered by</span>

        <svg
          role="img"
          aria-label="Vercel Inc."
          width="15"
          height="15"
          viewBox="0 0 116 100"
          className="fill-current text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M57.5 0L115 100H0L57.5 0z"
          />
        </svg>
      </a>
    </footer>
  );
}

export default Footer;
