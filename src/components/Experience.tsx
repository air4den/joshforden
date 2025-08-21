// import React from 'react';
import ExperienceCard from './ExperienceCard';
import './ExperienceCard.css';

type Exp = {
    logo: string;
    company: string;
    role: string;
    location: string;
    date: string;
    description: React.ReactNode;
    skills: string[];
}

const experiences: Exp[] = [
    {
        logo: 'TheHomeDepot.png',
        company: 'The Home Depot',
        role: 'Software Engineer Intern',
        location: 'Atlanta, GA',
        date: 'May 2025 - July 2025',
        description: (
            <>
                <ul>
                    <li>Designed and implemented Python microservices within an ETL architecture to automate NeoLoad performance testing data ingestion in relational database; deployed on Google Cloud Run and integrated with BigQuery, Pub/Sub, Eventarc, and Docker</li>
                    <li>Developed a test status application and supporting microservices for data cleanup and download error handling, integrating RESTful API endpoints into Grafana dashboards for real-time monitoring of 15,000+ annual performance tests</li>
                    <li>Saved developers up to 1,500+ hours annually, improving productivity for 350+ active users</li>
                </ul>
            </>

        ),
        skills: ['Python', 'Google Cloud', 'Terraform', 'Docker', 'Grafana', 'Jira', 'GitHub', 'Slack', 'Flask',]
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