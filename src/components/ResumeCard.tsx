import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { ReactNode } from 'react';

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
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              {icon && (
                <span className="text-primary [&>svg]:h-4 [&>svg]:w-4">
                  {icon}
                </span>
              )}

              <h3 className="text-base font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
                {title}
                {company && (
                  <span className="text-muted-foreground"> · {company}</span>
                )}
              </h3>
            </div>

            {meta && (
              <div className="text-sm text-muted-foreground">{meta}</div>
            )}
          </div>

          <span className="whitespace-nowrap text-sm font-mono text-muted-foreground tabular-nums">
            {period}
          </span>
        </div>
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
