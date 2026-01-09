import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { experience } from '@/data/experience.ts';

export function ExperienceSection() {
  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <Card
            key={index}
            className="bg-card border-border hover:border-primary/50 transition-colors group"
          >
            <CardContent className="p-6">
              <div className="grid gap-4 lg:grid-cols-[140px_1fr]">
                <span className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </span>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title} ·{' '}
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-foreground hover:text-primary"
                      >
                        {exp.company}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-0 hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
