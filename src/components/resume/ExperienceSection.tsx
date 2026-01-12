import { experience } from '@/data/experience';
import { CardList } from '@/components/CardList.tsx';
import { ResumeCard } from '@/components/ResumeCard.tsx';
import { Section } from '@/components/Section.tsx';

export function ExperienceSection() {
  return (
    <Section title="Experience">
      <CardList>
        {experience.map((exp) => (
          <ResumeCard
            key={`${exp.company}-${exp.period}-${exp.title}`}
            title={exp.title}
            company={exp.company}
            meta={exp.project}
            period={exp.period}
            description={exp.description}
            tech={exp.technologies}
          />
        ))}
      </CardList>
    </Section>
  );
}
