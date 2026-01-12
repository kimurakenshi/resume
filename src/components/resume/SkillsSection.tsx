import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { skills } from '@/data/skills.ts';

export function SkillsSection() {
  return (
    <section className="flex flex-col gap-6">
      <Separator className="bg-border" />

      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
        Skills
      </h2>

      <div className="flex flex-col gap-5">
        {skills.map((category) => (
          <div key={category.title} className="flex flex-col gap-2">
            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
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
