import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title, description }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Header />

      <div className="content">{children}</div>

      <Footer />
    </main>
  </div>
);

export default Layout;
