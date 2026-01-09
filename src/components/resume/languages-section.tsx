import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { languages } from '@/data/languages.ts';

export function LanguagesSection() {
  return (
    <section>
      <Separator className="bg-border mb-6" />
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
        Languages
      </h2>
      <div className="space-y-4">
        {languages.map((category) => (
          <div key={category.title}>
            <div className="flex flex-wrap gap-2">
              {category.languages.map((language) => (
                <Badge
                  key={language}
                  variant="outline"
                  className="border-border text-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
