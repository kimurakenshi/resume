import { Github, Linkedin, Mail, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ResumeHeader() {
  return (
    <div className="space-y-6">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Alex Johnson
        </h1>
        <p className="text-lg text-primary font-medium mt-1">
          Software Engineer
        </p>
      </div>

      <div className="flex flex-col gap-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <MapPin className="h-4 w-4 text-primary" />
          <span>San Francisco, CA</span>
        </div>
        <a
          href="mailto:alex@example.com"
          className="flex items-center gap-2 justify-center lg:justify-start hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4 text-primary" />
          <span>alex@example.com</span>
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button
          variant="outline"
          size="icon"
          asChild
          className="border-border hover:border-primary hover:text-primary bg-transparent"
        >
          <a
            href="https://linkedin.com"
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
            href="https://portfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
