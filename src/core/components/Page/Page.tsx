import Head from 'next/head';
import classNames from 'classnames';

const Page = ({
  children,
  title,
  description,
  hasMarkdown = false,
  hasMaxWidth = true,
  customClasses = '',
  background = 'background',
}) => (
  <div
    className={classNames(
      'on-background font-default transition-all ease-in-out duration-1000',
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
        'on-background py-6 px-8 transition-all ease-in-out duration-1000 page--min-height',
        customClasses,
        background,
        {
          'mx-auto my-0 max-w-full md:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl': hasMaxWidth,
        }
      )}
    >
      {hasMarkdown ? (
        <article className="prose dark:prose--dark max-w-none">
          {children}
        </article>
      ) : (
        [children]
      )}
    </main>
  </div>
);

export default Page;
