import { summary } from '@/data/summary.ts';

export function AboutSection() {
  return (
    <section>
      {summary.map((summaryParagraph, index) => (
        <p
          key={index}
          className="text-md leading-relaxed text-muted-foreground"
        >
          {summaryParagraph}
        </p>
      ))}
    </section>
  );
}
