import * as React from 'react';

type CardListProps = {
  children: React.ReactNode;
};

export function ResumeCardList({ children }: CardListProps) {
  return <div className="flex flex-col gap-6">{children}</div>;
}
