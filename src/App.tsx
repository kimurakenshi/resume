import { SummarySection } from '@/components/resume/SummarySection.tsx';
import { ResumeHeader } from '@/components/resume/ResumeHeader.tsx';
import { SkillsSection } from '@/components/resume/SkillsSection.tsx';
import { LanguagesSection } from '@/components/resume/LanguagesSection.tsx';
import { ExperienceSection } from '@/components/resume/ExperienceSection.tsx';
import { EducationSection } from '@/components/resume/EducationSection.tsx';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          <aside className="space-y-8">
            <ResumeHeader />
            <SkillsSection />
            <LanguagesSection />
          </aside>

          <main className="space-y-12">
            <SummarySection />
            <ExperienceSection />
            <EducationSection />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
