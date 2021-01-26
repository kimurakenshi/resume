import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title, description, hasMarkdown = false }) => (
  <div className="h-screen dark:bg-black">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="flex-1 prose">
      <div>{children}</div>
    </main>

    <Footer />
  </div>
);

export default Layout;
