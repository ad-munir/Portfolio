import './About.css'
const About = () => {
    return (
        <section className="about">
            <div className="about-heading">About me</div>
            <div className="about-container">
                <div className="about-img">
                    <img src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" alt="" />
                </div>
                <div className="about-content">
                    <h1>Mounir Ayad</h1>
                    <h2>Full Stack Web Developer</h2>
                    <p>I design and develop modern websites and mobile applications in a professional manner from scratch, 
                        I also have experience with search engine optimization (SEO) and raising the site's ranking in search
                        results where the site appears in the first search results. You can take a look at my works before starting 
                        to work together, and if you want to design and develop a website or an application for your business 
                        you can contact me to start your project.
                    </p>

                    <button className="my-works-btn">My works</button>
                </div>
            </div>
        </section>
    )
}

export default About