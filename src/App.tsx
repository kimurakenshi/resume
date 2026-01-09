import { ResumeHeader } from '@/components/resume/resume-header';
import { AboutSection } from '@/components/resume/about-section';
import { ExperienceSection } from '@/components/resume/experience-section';
import { EducationSection } from '@/components/resume/education-section';
import { SkillsSection } from '@/components/resume/skills-section';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-16">
          {/* Sidebar */}
          <aside className="space-y-8">
            <ResumeHeader />
            <SkillsSection />
          </aside>

          {/* Main Content */}
          <main className="space-y-12">
            <AboutSection />
            <ExperienceSection />
            <EducationSection />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
