import './Skills.css'

const skills = [
    { name: 'Python',   icon: 'python.png'},
    { name: 'C',        icon: 'c.png' },
    { name: 'C++',      icon: 'cpp.png' },
    { name: 'React.js',       icon: 'react.png' },
    { name: 'HTML',       icon: '' },
    { name: 'CSS',       icon: '' },
    { name: 'TypeScript',       icon: '' },
    { name: 'Java',       icon: '' },
    { name: 'SQL',       icon: '' },
    { name: 'Google Cloud',       icon: '' },
    { name: 'Next.js',       icon: '' },
    { name: 'Docker',       icon: '' }

]

export default function About() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {skills.map(({ name, icon }) => (
                <div key={name} className="skill-item">
                    <img
                        src={icon}
                        alt={`${name} logo`}
                        className="skill-item__icon"
                    />
                    <span className="skill-item__label">{name}</span>
                </div>
                ))}
            </div>
        </section>
    )
}