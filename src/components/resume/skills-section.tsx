import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { skills } from '@/data/skills.ts';

export function SkillsSection() {
  return (
    <section>
      <Separator className="bg-border mb-6" />
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
        Skills
      </h2>
      <div className="space-y-4">
        {skills.map((category) => (
          <div key={category.title}>
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
