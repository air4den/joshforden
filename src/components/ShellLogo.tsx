import "./ShellLogo.css"

interface ShellLogoProps {
    currentSection: string
}
export default function ShellLogo( {currentSection}:ShellLogoProps) {
    return (
        <span className="shell-logo">
            <span className="shell-prompt"> &gt; {currentSection} $ </span>
            <span className="shell-cursor" />
        </span>
    )
}