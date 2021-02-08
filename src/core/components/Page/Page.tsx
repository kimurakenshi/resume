import Head from 'next/head';
import styles from './Page.module.scss';
import classNames from 'classnames';

const Page = ({ children, title, description, hasMarkdown = false }) => (
  <div className="background on-background font-default">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main
      className={classNames(
        styles.page__content,
        'background on-background py-6 px-8'
      )}
    >
      {hasMarkdown ? (
        <article className="prose">{children}</article>
      ) : (
        [children]
      )}
    </main>
  </div>
);

export default Page;
