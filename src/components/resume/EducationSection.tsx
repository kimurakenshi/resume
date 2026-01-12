import { education } from '@/data/education';
import { GraduationCap } from 'lucide-react';
import { ResumeSection } from '@/components/resume/ResumeSection.tsx';
import { ResumeCardList } from '@/components/resume/ResumeCardList.tsx';
import { ResumeCard } from '@/components/resume/ResumeCard.tsx';

export function EducationSection() {
  return (
    <ResumeSection title="Education">
      <ResumeCardList>
        {education.map((edu) => (
          <ResumeCard
            key={`${edu.school}-${edu.period}-${edu.degree}`}
            title={edu.degree}
            meta={edu.school}
            period={edu.period}
            icon={<GraduationCap />}
          />
        ))}
      </ResumeCardList>
    </ResumeSection>
  );
}
