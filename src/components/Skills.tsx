import './Skills.css'
import { SKILL_ICON_MAP } from './ProjectCard';

const displayedSkills = [
    'Python', 
    'C', 
    'Java', 
    'C++', 
    'HTML', 
    'CSS', 
    'TypeScript', 
    'React.js', 
    'SQL', 
    'Google Cloud', 
    'Next.js', 
    'Docker'
];

export default function About() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {displayedSkills.map((name) => {
                const icon = SKILL_ICON_MAP[name];
                return (
                    <div key={name} className="skill-item">
                    {icon && (
                        <img
                        src={icon}
                        alt={`${name} logo`}
                        className="skill-item__icon"
                        />
                    )}
                    <span className="skill-item__label">{name}</span>
                    </div>
                );
                })}
            </div>
        </section>
    )
}