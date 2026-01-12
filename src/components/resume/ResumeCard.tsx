import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { ReactNode } from 'react';
import { ResumeCardHeader } from '@/components/resume/ResumeCardHeader.tsx';

type ResumeCardProps = {
  title: string;
  company?: string;
  meta?: string;
  period: string;
  description?: string;
  tech?: string[];
  icon?: ReactNode; // 👈 NEW
};

export function ResumeCard({
  title,
  company,
  meta,
  period,
  description,
  tech,
  icon,
}: ResumeCardProps) {
  return (
    <Card className="group border-border bg-card transition-colors hover:border-primary/50 gap-1">
      <CardHeader className="pb-3">
        <ResumeCardHeader
          title={title}
          company={company}
          period={period}
          meta={meta}
          icon={icon}
        />
      </CardHeader>

      {(description || tech?.length) && (
        <CardContent className="pt-0">
          <div className="flex flex-col gap-3">
            {description && (
              <p className="leading-relaxed text-muted-foreground">
                {description}
              </p>
            )}

            {tech?.length ? (
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
