import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DevDash',
    description:
      'A developer dashboard that aggregates GitHub activity, task management, and analytics in one place.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://devdash.example.com',
  },
  {
    title: 'CodeSnippet',
    description:
      'A beautiful code snippet sharing platform with syntax highlighting and collaboration features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://codesnippet.example.com',
  },
];

export function ProjectsSection() {
  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-6">
        Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-card border-border hover:border-primary/50 transition-colors group"
          >
            <CardContent className="p-6 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-0 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
