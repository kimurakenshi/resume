import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout description="Home" title="Home">
      <main className="flex flex-col justify-center self-center flex-1">
        <h1 className="text-center font-sans font-bold text-white text-6xl mb-8">
          Hi! I&apos;m Sebastián Giraudo.
        </h1>

        <p className="text-center font-sans text-gray-300 text-3xl mb-8">
          You&apos;ll learn more about me soon!
        </p>

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
