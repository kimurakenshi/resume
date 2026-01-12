import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { experience } from '@/data/experience.ts';

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-mm font-semibold uppercase tracking-wider text-primary">
        Experience
      </h2>

      {/* Cards list */}
      <div className="flex flex-col gap-6">
        {experience.map((exp, index) => (
          <Card
            key={index}
            className="group border-border bg-card transition-colors hover:border-primary/50 gap-0"
          >
            <CardHeader className="pb-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-base font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                  {exp.title} · {exp.company}
                </h3>

                <span className="whitespace-nowrap text-sm font-mono text-muted-foreground tabular-nums">
                  {exp.period}
                </span>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-col gap-4">
                <p className="leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="border-0 bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
