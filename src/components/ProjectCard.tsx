import React from 'react';
import "./Projects.css"
import SvgLink from "./assets/link.tsx"
import SvgGithub from "./assets/github.tsx"; 

export const SKILL_ICON_MAP: Record<string, string> = {
    'Python': 'python.png',
    'C': 'c.png',
    'Java': 'java.png',
    'C++': 'cpp.png',
    'HTML': 'html.png',
    'CSS': 'css.png',
    'TypeScript': 'ts.png',
    'React.js': 'react.png',
    'SQL': 'sql.png',
    'Google Cloud': 'gcp.png',
    'Next.js': 'nextjs.svg',
    'Docker': 'docker.webp',
    'Pandas': 'pandas.png',
    'Jupyter Notebook': 'jupyter.png',
    'SFML': 'sfml.png',
    'Pygame': 'pygame.png',
    'Terraform': 'terraform.png',
    'Vite': 'Vite.png',
    'GitHub Actions': 'ghactions.svg',
    'GDB': 'gdb.png',
    'QEMU': 'qemu.png',
    'MongoDB': 'mongodb.svg',
    'Node.js': 'node.png',
    'Vercel': 'vercel.png',
    'Tailwind CSS': 'tailwind.png',
    'Prisma ORM': 'prisma.svg',
    'NextAuth': 'nextauth.png',
    'Leaflet': 'leaflet.png',
    'Grafana': 'grafana.svg',
    'Jira': 'jira.svg',
    'GitHub': 'github.png',
    'Slack': 'slack.png',
    'Flask': 'flask.png',
};

interface ProjectCardProps {
    title: string;
    description: React.ReactNode;
    skills?: string[];
    github?: string;
    other_link?: string;
}

export default function ProjectCard({ title, description, skills = [], github, other_link }: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className='project-content'>
                <h3 className="project-header">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-skills">
                    {skills.map((name:string) => (
                        <div key={name} className="project-skill">
                            {SKILL_ICON_MAP[name] && (
                                <img
                                    src={SKILL_ICON_MAP[name]}
                                    alt={`${name} logo`}
                                    className="project-skill-icon"
                                />
                            )}
                            <span className="project-skill-name">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="project-links">
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub link">
                        <SvgGithub className="project-link-icon" />
                    </a>
                )}
                {other_link && (
                    <a href={other_link} target="_blank" rel="noopener noreferrer" aria-label="External link">
                        <SvgLink className="project-link-icon" />
                    </a>
                )}
            </div>
        </div>
    );
}