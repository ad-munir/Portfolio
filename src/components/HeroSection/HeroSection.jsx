import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">

            <ul className="social-container">
                <li><i className="fa-brands fa-github"></i></li>
                <li><i className="fa-brands fa-linkedin-in"></i></li>
            </ul>

            <div className="hero-content">
                <h1 className="hero-title">Hi, I'm [Mounir]</h1>
                <p className="hero-subtitle">Full Stack Web Developer</p>
                <p className="hero-description">
                    Welcome to my portfolio. I create elegant and functional web solutions that leave an impact.
                </p>
                <button className="hero-btn">View Projects</button>
            </div>


            <div className="hero-image">
                <img src="https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774" alt="Profile" />
            </div>
        </section>
    );
};

export default HeroSection;
