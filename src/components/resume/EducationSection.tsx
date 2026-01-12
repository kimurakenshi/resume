import { education } from '@/data/education';
import { Section } from '@/components/Section.tsx';
import { CardList } from '@/components/CardList.tsx';
import { ResumeCard } from '@/components/ResumeCard.tsx';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <Section title="Education">
      <CardList>
        {education.map((edu) => (
          <ResumeCard
            key={`${edu.school}-${edu.period}-${edu.degree}`}
            title={edu.degree}
            meta={edu.school}
            period={edu.period}
            icon={<GraduationCap />}
          />
        ))}
      </CardList>
    </Section>
  );
}
