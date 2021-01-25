import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-black h-screen flex flex-col justify-center self-center">
      <h1 className="text-center font-sans font-bold text-white text-6xl mb-8">
        Hi! I&apos;m Sebastian Giraudo.
      </h1>

      <p className="text-center font-sans text-gray-300 text-3xl mb-8">
        This&apos;ll be my personal Website soon!
      </p>

      <Image
        className="animate-pulse"
        alt="Site under construction"
        src="/under-construction.svg"
        width={300}
        height={250}
      />
    </main>
  );
}
