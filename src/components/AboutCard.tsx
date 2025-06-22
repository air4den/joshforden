import './About.css'
export default function AboutCard() {
    return (
        <div className="about-card">
            
            <div className="about-card-text">
                <h3 className='about-card-text-h3'>Hi, I'm Josh Forden! 👋🏻</h3>
                <p>🐝 I'm studying Computer Science at Georgia Tech, specializing in Systems & Architecture and Modeling & Simulation</p>
                <p>💥 As an engineer, I build software that solves problems for consumers and businesses.</p>
            </div>
            <div className="about-card-img-crop">
                <img src="jp.jpg" className="about-card-img" />
            </div>
        </div>
    )
}