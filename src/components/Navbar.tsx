import './Navbar.css';
import SvgLinkedin from "./assets/linkedin.tsx"
import SvgGithub from "./assets/github.tsx"
import SvgInstagram from './assets/instagram.tsx';
import ShellLogo from './ShellLogo.tsx';
import { useTheme } from './useTheme';

interface NavbarProps {
    currentSection: string
}

export default function Navbar({currentSection}:NavbarProps) {
    const { isDark, toggleTheme } = useTheme();
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
                    <button className="nav-icon-txt" onClick={toggleTheme} title="Toggle dark mode">
                        {isDark ? '🌙' : '☀️'}
                    </button>
                </ul>
            </div>
        </nav>
    );
}