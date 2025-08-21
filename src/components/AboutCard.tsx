import { useState, useEffect } from 'react';
import './About.css'
export default function AboutCard() {
    const [ emailLink, setEmailLink ] = useState<any>(null);
    useEffect(() => {
    const user = 'forden_joshua';
    const domain = 'aol.com';
    const email = `${user}@${domain}`;
    setEmailLink(<a href={`mailto:${email}`} className="email-link">{email}</a>);
    }, []);

    return (
        <div className="about-card">
            <div className="about-card-text">
                <h3 className='about-card-text-h3'>Hi, I'm Josh Forden! 👋🏻</h3>
                <p>I'm studying <b>Computer Science</b> at <b>Georgia Tech</b>, specializing in <b>Systems & Architecture</b> and <b>Modeling & Simulation</b></p>
                <p>As an engineer, I build software that solves problems and provides value to customers and businesses.</p>
                <p>Let's get in touch! Shoot me an email: <span id="email">{emailLink}</span></p>
            </div>
            <div className="about-card-img-crop">
                <img src="jp.jpeg" className="about-card-img" />
            </div>
        </div>
    )
}