import Head from 'next/head';
import styles from './Page.module.scss';
import classNames from 'classnames';

const Page = ({
  children,
  title,
  description,
  hasMarkdown = false,
  customClasses = '',
  background = 'background',
}) => (
  <div
    className={classNames(
      'on-background font-default transition duration-500 ease-in-out duration-1000',
      background
    )}
  >
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main
      className={classNames(
        'on-background py-6 px-8 transition duration-500 ease-in-out duration-1000',
        styles.page__content,
        customClasses,
        background
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
