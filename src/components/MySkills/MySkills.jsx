import './MySkills.css';

const MySkills = () => {
    return (
        <section className="my-skills">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-container">
                <div className="skill-card">
                    <h3 className="skill-title">Backend Development</h3>
                    <ul className="technology-list">
                        <li>
                            <img src="https://w7.pngwing.com/pngs/279/249/png-transparent-java-logo-programming-language-java-plum-miscellaneous-text-orange-thumbnail.png" alt="Java" />
                            Java EE
                        </li>
                        <li>
                            <img src="path-to-php-logo.png" alt="PHP" />
                            Php
                        </li>
                        <li>
                            <img src="path-to-laravel-logo.png" alt="Laravel" />
                            Laravel
                        </li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h3 className="skill-title">Frontend Development</h3>
                    <ul className="technology-list">
                        <li>
                            <img src="path-to-html-logo.png" alt="HTML" />
                            HTML
                        </li>
                        <li>
                            <img src="path-to-css-logo.png" alt="CSS" />
                            CSS
                        </li>
                        <li>
                            <img src="path-to-js-logo.png" alt="JavaScript" />
                            JavaScript
                        </li>
                        <li>
                            <img src="path-to-react-logo.png" alt="React" />
                            React
                        </li>
                    </ul>
                </div>
                <div className="skill-card">
                    <h3 className="skill-title">Databases</h3>
                    <ul className="technology-list">
                        <li>
                            <img src="path-to-mysql-logo.png" alt="MySQL" />
                            MySQL
                        </li>
                        <li>
                            <img src="path-to-mongodb-logo.png" alt="MongoDB" />
                            MongoDB
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default MySkills;
