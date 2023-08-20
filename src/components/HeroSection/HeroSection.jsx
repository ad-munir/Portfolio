import './HeroSection.css';
import Navbar from './../Navbar/Navbar'
import avatar from './../../assets/avatar.png'
const HeroSection = () => {
    return (
        <div className='home'>
            <Navbar />
            <section className="hero">

                <div className="hero-content">
                    <h1 className="hero-title">Hi, I'm [ Mounir]</h1>
                    <p className="hero-subtitle">Full Stack Web Developer</p>
                    <p className="hero-description">
                        Welcome to my portfolio. I create elegant and functional web solutions that leave an impact.
                    </p>
                    <button className="hero-btn">
                        Contact Me <i className="fa-solid fa-circle-arrow-right fa-fade"></i>
                    </button>
                </div>


                <div className="hero-image">
                    <img src={avatar} alt="" className='avatar'/>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
