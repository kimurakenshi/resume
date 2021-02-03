import Head from 'next/head';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../footer/Footer';

const Layout = ({ children, title, description, hasMarkdown = false }) => (
  <div className="h-screen dark:bg-black dark:text-white">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className={styles.layout__content}>
      {hasMarkdown ? (
        <article className="prose">{children}</article>
      ) : (
        [children]
      )}
    </main>

    <Footer />
  </div>
);

export default Layout;
