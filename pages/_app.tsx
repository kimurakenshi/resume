import '../styles/globals.scss';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-sans bg-black h-screen flex flex-col">
      <Component {...pageProps} />;
      <Footer />
    </div>
  );
}

export default MyApp;
