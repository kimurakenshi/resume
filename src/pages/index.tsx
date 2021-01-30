import Image from 'next/image';
import { switchTheme } from '../theme/theme-service';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <Layout description="Home" title="Home">
      <main className="flex flex-col justify-center self-center flex-1">
        <h1>Hi! I&apos;m Sebastián Giraudo.</h1>
        <button onClick={() => switchTheme()}>Switch Theme</button>
        <p>You&apos;ll learn more about me soon!</p>

        <Image
          className="animate-pulse"
          alt="Site under construction"
          src="/under-construction.svg"
          width={300}
          height={250}
        />
      </main>
    </Layout>
  );
}
