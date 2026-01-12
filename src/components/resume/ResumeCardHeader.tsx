import type { ReactNode } from 'react';

type ResumeCardHeaderProps = {
  title: string;
  company?: string;
  period?: string;
  meta?: string;
  icon?: ReactNode;
};

export function ResumeCardHeader({
  title,
  company,
  period,
  meta,
  icon,
}: ResumeCardHeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            {icon && (
              <span className="text-primary [&>svg]:h-4 [&>svg]:w-4">
                {icon}
              </span>
            )}

            <h3 className="text-base font-semibold leading-tight text-foreground">
              {title}
              {company && (
                <span className="text-muted-foreground"> · {company}</span>
              )}
            </h3>
          </div>

          {meta && <div className="text-sm text-muted-foreground">{meta}</div>}
        </div>

        {period && (
          <span className="whitespace-nowrap text-sm font-mono text-muted-foreground tabular-nums">
            {period}
          </span>
        )}
      </div>
    </div>
  );
}
