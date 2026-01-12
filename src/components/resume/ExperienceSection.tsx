import { experience } from '@/data/experience';
import { ResumeSection } from '@/components/resume/ResumeSection.tsx';
import { ResumeCardList } from '@/components/resume/ResumeCardList.tsx';
import { ResumeCard } from '@/components/resume/ResumeCard.tsx';

export function ExperienceSection() {
  return (
    <ResumeSection title="Experience">
      <ResumeCardList>
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
      </ResumeCardList>
    </ResumeSection>
  );
}
