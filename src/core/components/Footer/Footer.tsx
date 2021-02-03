import styles from './Footer.module.scss';
import classNames from 'classnames';

function Footer() {
  return (
    <footer className={classNames('text-center', styles.footer)}>
      <a
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mb-2"
      >
        Powered by{' '}
        <img
          src="/vercel.svg"
          alt="Vercel Logo"
          className="h-4 inline bg-white"
        />
      </a>
    </footer>
  );
}

export default Footer;
