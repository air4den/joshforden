import './Hero.css'

export default function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero-text">
                    <h1>Josh Forden</h1>
                    <h2>Hello, World! 🤙🏻</h2>
                    <div className="hero-quicklinks">
                        <a href="#about" className='quicklink'>
                            {/* <svg xmlns="http://www.w3.org/2000/svg"  className="quicklink-icon"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> */}
                            <span>👨🏼‍💻 About</span>
                        </a>
                        <a href="#experience" className='quicklink'>
                            <span>🛠️ Experience</span>
                        </a>
                        <a href="#projects" className='quicklink'>
                            <span>🚀 Projects</span>
                        </a>
                    </div>
                </div>
            </div>     
        </section>
    )
}