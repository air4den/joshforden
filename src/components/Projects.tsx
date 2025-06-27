// import React fromm 'react';
import ProjectCard from "./ProjectCard";
import "./Projects.css"

const projects = [
    {
        title: 'Test Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: ['Java', 'Python'],
        github: 'https://google.com',
        other_link: 'https://google.com'
    },
    {
        title: 'Test Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        skills: ['Java', 'Python'],
        github: 'https://google.com',
        other_link: 'https://google.com'
    },
    {
        title: 'Test Project Title',
        description: 'Lorem ipsum dolor sit amet, cincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: ['Java', 'Python'],
        github: 'https://google.com',
        other_link: 'https://google.com'
    },
    {
        title: 'Test Project Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        skills: ['Java', 'Python'],
        github: 'https://google.com',
        other_link: 'https://google.com'
    }
];

export default function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
                </div>
            </div>
        </section>
    )
}