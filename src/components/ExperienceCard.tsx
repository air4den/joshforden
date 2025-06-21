import './ExperienceCard.css'
interface ExperienceCardProps {
    logo: string;
    company: string;
    role: string;
    location: string;
    date: string;
}

export default function ExperienceCard(
    { logo, company, role, location, date}: ExperienceCardProps) {
        return (
            <div className="experience-card">
                <div className="exp-content">
                    <img src={logo} alt={`${company} logo`} className="exp-logo" />
                    <div className='exp-text'>
                        <h3 className="exp-company">{company}</h3>
                        <p className='exp-role'>{role}</p>
                        <p className='exp-location'>{location} 📍</p>
                        <p className='exp-date'>{date}</p>
                    </div>
                </div>


                    
                
            </div>
        )
    }