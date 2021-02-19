import Head from 'next/head';
import classNames from 'classnames';
import { Background } from '../../../components';
import { ReactNode } from 'react';
import { BackgroundItem } from '../../../components/Background/Background';

type PageProps = {
  children: ReactNode;
  title: string;
  description: string;
  hasMarkdown?: boolean;
  customClasses?: string;
  imageIndex: number;
  items: Array<BackgroundItem>;
};

const Page = ({
  children,
  title,
  description,
  hasMarkdown = false,
  customClasses = '',
  imageIndex = 0,
  items = [
    {
      id: 1,
      classNames: 'background on-background',
    },
  ],
}: PageProps) => (
  <div className="on-background font-default relative ">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description} />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {items && items.length > 0 && (
      <Background currentItemIndex={imageIndex} items={items} />
    )}

    <main
      className={classNames(
        'on-background py-6 md:py-16 px-8 page--min-height mx-auto my-0 max-w-full md:max-w-2xl xl:max-w-5xl 2xl:max-w-6xl',
        customClasses
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
