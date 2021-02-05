import Head from 'next/head';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classNames from 'classnames';
import Nav from '../Nav/Nav';

const Layout = ({ children, title, description, hasMarkdown = false }) => (
  <div className="h-screen dark:bg-black dark:text-white font-default">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <Nav />

    <main
      className={classNames(
        styles.layout__content,
        'dark:bg-black dark:text-white py-4 px-8'
      )}
    >
      {hasMarkdown ? (
        <article className="prose">{children}</article>
      ) : (
        [children]
      )}
    </main>

    <hr className="border-gray-500 border-opacity-90 w-11/12 m-auto" />

    <Footer />
  </div>
);

export default Layout;
