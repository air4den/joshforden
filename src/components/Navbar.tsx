import './Navbar.css';
import SvgLinkedin from "./assets/linkedin.tsx"
import SvgGithub from "./assets/github.tsx"
import SvgInstagram from './assets/instagram.tsx';
import ShellLogo from './ShellLogo.tsx';

interface NavbarProps {
    currentSection: string
}

export default function Navbar({currentSection}:NavbarProps) {
    return (
        <nav className="nav">
            <div className="nav-container">
                <ShellLogo currentSection={currentSection}/>
                <ul className="nav-links">
                    <a
                        href="https://github.com/air4den"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SvgGithub className="nav-icon"/>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/joshforden/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SvgLinkedin className="nav-icon"/>
                    </a>
                    <a
                        href="https://instagram.com/josh_forden"
                        target="_blank"
                        rel='noopener noreferrer'
                    >
                        <SvgInstagram className="nav-icon" />
                    </a>
                    <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <title>Toggle dark mode</title>
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                </ul>
            </div>
        </nav>
    );
}