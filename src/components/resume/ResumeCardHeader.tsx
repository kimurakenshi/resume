import type { ReactNode } from 'react';

type ResumeCardHeaderProps = {
  title: string;
  employer?: string;
  client?: string;
  period?: string;
  meta?: string;
  metaLabel?: string;
  icon?: ReactNode;
};

export function ResumeCardHeader({
  title,
  employer,
  client,
  period,
  meta,
  metaLabel,
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
              {employer && (
                <span className="text-muted-foreground"> · {employer}</span>
              )}
            </h3>
          </div>

          {client && (
            <div className="text-sm text-muted-foreground">
              Client: {client}
            </div>
          )}

          {meta && (
            <div className="text-sm text-muted-foreground">
              {metaLabel ? `${metaLabel}: ` : ''}
              {meta}
            </div>
          )}
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
