import './About.css'
export default function AboutCard() {
    return (
        <div className="about-card">
            
            <div className="about-card-text">
                <h3 className='about-card-text-h3'>Hi, I'm Josh Forden! 👋🏻</h3>
                <p>🐝 I'm studying <b>Computer Science</b> at <b>Georgia Tech</b>, specializing in <b>Systems & Architecture</b> and <b>Modeling & Simulation</b></p>
                <p>💥 As an engineer, I build software that solves problems for consumers and businesses.</p>
            </div>
            <div className="about-card-img-crop">
                <img src="jp.jpeg" className="about-card-img" />
            </div>
        </div>
    )
}