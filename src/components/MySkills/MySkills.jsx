import './MySkills.css';
import react from'./../../assets/react.svg'

const MySkills = () => {
    return (
        <section className="my-skills">
            <h2 className="section-title">My Skills</h2>

            <div className="skills-container">
                <div className="skill-card">
                    <div className="skill-cercle">
                        <img src={react} alt="" />
                    </div>
                    <h3 className="skill-name">React</h3>
                </div>

                <div className="skill-card">
                    <div className="skill-cercle">
                        <img src={react} alt="" />
                    </div>
                    <h3 className="skill-name">React</h3>
                </div>

                <div className="skill-card">
                    <div className="skill-cercle">
                        <img src={react} alt="skill" />
                    </div>
                    <h3 className="skill-name">React</h3>
                </div>

                <div className="skill-card">
                    <div className="skill-cercle">
                        <img src={react} alt="" />
                    </div>
                    <h3 className="skill-name">React</h3>
                </div>

                <div className="skill-card">
                    <div className="skill-cercle">
                        <img src={react} alt="" />
                    </div>
                    <h3 className="skill-name">React</h3>
                </div>
            </div>
        </section>
    );
}

export default MySkills;
