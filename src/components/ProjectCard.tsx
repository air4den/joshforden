// import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
}

export default function ProjectCard({ title, description } : ProjectCardProps) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}