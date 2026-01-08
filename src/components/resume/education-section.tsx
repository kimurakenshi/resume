import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    period: '2014 — 2018',
    degree: 'B.Sc. Computer Science',
    school: 'University of California, Berkeley',
    description:
      'Focused on software engineering and human-computer interaction. Graduated with honors.',
  },
];

export function EducationSection() {
  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
        Education
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="grid gap-4 lg:grid-cols-[140px_1fr]">
                <span className="text-sm text-muted-foreground font-mono">
                  {edu.period}
                </span>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <h3 className="font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-muted-foreground">{edu.school}</p>
                  <p className="text-sm text-muted-foreground">
                    {edu.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
