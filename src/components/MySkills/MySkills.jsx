import './MySkills.css'
const MySkills = () => {
    return (
        <section className="my-skills">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
            <div className="skill-card">
                <h3 className="skill-title">Backend Development</h3>
                <ul className="technology-list">
                    <li>Java EE</li>
                    <li>Php</li>
                    <li>Laravel</li>
                </ul>
            </div>
            <div className="skill-card">
                <h3 className="skill-title">Frontend Development</h3>
                <ul className="technology-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                </ul>
            </div>
            <div className="skill-card">
                <h3 className="skill-title">Databases</h3>
                <ul className="technology-list">
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        </div>
    </section>
    )
}

export default MySkills