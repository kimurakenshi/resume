import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile.ts';

export function ResumeHeader() {
  return (
    <div className="space-y-6">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {profile.fullName}
        </h1>
        <p className="text-lg text-primary font-medium mt-1">{profile.role}</p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <MapPin className="h-4 w-4 text-primary" />
          <span>{profile.location}</span>
        </div>
        <a
          href={`mailto:${profile.email}`}
          className="flex items-center gap-2 justify-center lg:justify-start hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4 text-primary" />
          <span>{profile.email}</span>
        </a>
      </div>

      <div className="flex gap-2 justify-center lg:justify-start">
        <Button
          variant="outline"
          size="icon"
          asChild
          className="border-border hover:border-primary hover:text-primary bg-transparent"
        >
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          asChild
          className="border-border hover:border-primary hover:text-primary bg-transparent"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
