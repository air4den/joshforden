// import React fromm 'react';
import ProjectCard from "./ProjectCard";
import "./Projects.css"

const projects = [
    {
        title: 'Joga Flow – Soccer Heatmap from Strava Data ',
        description: (
            <>
                <ul>
                    {/* <li></li> */}
                </ul>
            </>
        ),
        skills: ['TypeScript', 'React.js', 'Next.js', 'MongoDB', 'Node.js', 'Tailwind CSS', 'Vercel', 'Prisma ORM', 'NextAuth', 'Leaflet'],
        github: 'https://github.com/air4den/footyflow',
        other_link: 'https://jogaflo.joshforden.com'
    },
    {
        title: 'x86 Operating System Optimizations',
        description: (
            <>
                <ul>
                    <li>Implemented modern kernel-level OS optimizations and user-space functionality from a primitive x86 kernel</li>
                    <li>Added kernel stack backtrace support and modified BIOS and kernel to utilize all available RAM</li>
                    <li>Implemented a priority-based FIFO and round robin scheduler</li>
                    <li>Added 1-to-1 kernel threading support by implementing clone and a user-space threading library</li>
                    <li>Added user-isolation, login, file permissions, and large file support</li>
                </ul>
            </>

        ),
        skills: ['C', 'Assembly', 'GDB', 'QEMU', 'Docker'],
    },
    {
        title: 'Joga Bonito',
        description: (
            <>
                <ul>
                    <li>Programmed a soccer-themed Game Boy Advance application in C that runs on a GBA emulator</li>
                    <li>Implemented button input for program flow, object collision detection, and background animation</li>
                    <li>Optimized drawing to eliminate screen tearing when drawing visually complex backgrounds and sprites by writing custom “undraw” methods to efficiently draw sprites and simulate a transparent alpha channel</li>
                </ul>
            </>
        ),
        skills: ['C'],
        github: 'https://github.com/air4den/joga_bonito'
    },
    {
        title: 'Computer Simulations',
        description: (
            <>
                <ul>
                    <li>
                        <a
                            href="https://github.com/air4den/fluid_simulation"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Euler Fluid Simulation</a>: Implemented incompressible fluid visualization in C++</li>
                    <li>
                        <a
                            href="https://github.com/air4den/game_of_life"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Conway’s Game of Life</a>: classic interactive cellular automata evolution simulation</li>
                    <li>
                        <a
                            href="https://github.com/air4den/boids"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Boids</a>: Simulated flocks, herds, and schools in Python. Used PyGame for graphics</li>
                    <li>
                        <a
                            href="https://github.com/air4den/1D_wolfram_cellular_automata"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Wolfram’s 1-D Automata</a>: Implemented discrete automata simulation in C++</li>
                </ul>
            </>
        ),
        skills: ['C++', 'Python', 'SFML', 'Pygame'],
    },
    {
        title: 'Personal Website',
        description: (
            <>
                <ul>
                    <li>Designed and developed an interactive 'living resume' to showcase my interests, experience, skills, and projects</li>
                    <li>Built a responsive UI with custom CSS for seamless experience across devices</li>
                    <li>Automated deployment and continuous integration using Vite and GitHub Actions</li>
                    <li>Used modular React components and TypeScript for a maintainable, scalable codebase</li>
                </ul>
            </>
        ),
        skills: ['React.js', 'TypeScript', 'HTML', 'CSS', 'Vite', 'GitHub Actions'],
        github: 'https://github.com/air4den/joshforden',
        other_link: 'https://joshforden.com'
    },
    {
        title: 'Click Buzz',
        description: (
            <>
                <ul>
                    <li>Worked in a team that built a backend ML model and frontend application to predict which YouTube video titles will receive the most engagement for Georgia Tech Hacklytics Data Science Hackathon</li>
                    <li>Scraped and cleaned training data from YouTube videos using YouTube API, Python, Pandas, and Jupyter Notebook</li>    
                </ul>
            </>
        ),
        skills: ['Python', 'Pandas', 'Jupyter Notebook'],
        github: 'https://github.com/B-Ricey763/ClickBuzz'
    },
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