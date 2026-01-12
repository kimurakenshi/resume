import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { education } from '@/data/education.ts';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
        Education
      </h2>

      <div className="flex flex-col gap-6">
        {education.map((edu, index) => (
          <Card key={index} className="border-border bg-card gap-2">
            <CardHeader className="pb-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <h3 className="text-base font-semibold leading-tight text-foreground">
                    {edu.degree}
                  </h3>
                </div>

                <span className="whitespace-nowrap text-sm font-mono text-muted-foreground tabular-nums">
                  {edu.period}
                </span>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-muted-foreground">{edu.school}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
