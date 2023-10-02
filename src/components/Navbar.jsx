const Navbar = () => {
    return (
        <header>

            <div className="logo-container">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/JD_Sports_logo.svg/1200px-JD_Sports_logo.svg.png" alt="Logo" />
            </div>

            <ul className="nav-links">
                <li className="nav-link">
                    <span>Home</span>
                    <span className='underline'></span>
                </li>
                <li className="nav-link">
                    <span>About</span>
                    <span className='underline'></span>
                </li>
                <li className="nav-link">
                    <span>Projects</span>
                    <span className='underline'></span>
                </li>
            </ul>

            <div className="contact-container">
                <span>Contact</span>
                <span className='underline'></span>
            </div>
            
        </header>
    )
}

export default Navbar