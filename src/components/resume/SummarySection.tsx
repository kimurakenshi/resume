import { summary } from '@/data/summary.ts';

export function SummarySection() {
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
