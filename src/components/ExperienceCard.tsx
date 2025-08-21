import './ExperienceCard.css'
import { SKILL_ICON_MAP } from './ProjectCard';
interface ExperienceCardProps {
    logo: string;
    company: string;
    role: string;
    location: string;
    date: string;
    description: React.ReactNode;
    skills: string[];
}

export default function ExperienceCard(
    { logo, company, role, location, date, description, skills}: ExperienceCardProps) {
        return (
            <div className="experience-card">
                <div className="exp-content">
                    <img src={logo} alt={`${company} logo`} className="exp-logo" />
                    <div className='exp-text'>
                        <h3 className="exp-company">{company}</h3>
                        <p className='exp-role'>{role}</p>
                        <p className='exp-location'>{location}</p>
                        <p className='exp-date'>{date}</p>
                    </div>
                </div>
                <div className="exp-description">
                    {description}
                </div>
                <div className="exp-skills">
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
        )
    }