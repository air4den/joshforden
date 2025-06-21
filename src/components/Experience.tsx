// import React from 'react';
import ExperienceCard from './ExperienceCard';
import './ExperienceCard.css';

type Exp = {
    logo: string;
    company: string;
    role: string;
    location: string;
    date: string;
}

const experiences: Exp[] = [
    {
        logo: '/TheHomeDepot.png',
        company: 'The Home Depot',
        role: 'Software Engineer Intern',
        location: 'Atlanta, GA',
        date: 'Summer 2025'
    }
];

export default function Experience() {
    return (
        <section id="experience">
            <div className="container">
                <h2>Experience</h2>
                <div className="experience-list">
                    {experiences.map((exp, i) => (
                        <ExperienceCard key={i} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    )
}