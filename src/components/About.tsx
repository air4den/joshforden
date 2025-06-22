import AboutCard from "./AboutCard"
import './About.css'

export default function About() {
    return (
        <section id="about">
            <h2>About</h2>
            <div className="about-content">
                <AboutCard />
            </div>
        </section>
    )
}