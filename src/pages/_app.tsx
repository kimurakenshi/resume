import { useEffect } from 'react';
import '../styles/globals.scss';
import { initializeTheme } from '../theme/theme-service';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initializeTheme();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
