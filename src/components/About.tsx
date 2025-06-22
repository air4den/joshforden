import AboutCard from "./AboutCard"
import './About.css'
import InterestesCard from "./InterestsCard"

export default function About() {
    return (
        <section id="about">
            <h2>About</h2>
            <div className="about-content">
                <AboutCard />
                <InterestesCard />
            </div>
        </section>
    )
}