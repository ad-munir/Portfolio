import './MySkills.css';
import react from './../../assets/react.svg'
import javascript from './../../assets/javascript.svg'
import php from './../../assets/php.svg'
import css from './../../assets/css.svg'
import bootstrap from './../../assets/bootstrap.svg'
import html from './../../assets/html.svg'
import laravel from './../../assets/laravel.svg'
import java from './../../assets/java.svg'
import jquery from './../../assets/jquery.svg'
import spring from './../../assets/spring.svg'
import docker from './../../assets/docker.svg'
import mysql from './../../assets/mysql.svg'
import mongodb from './../../assets/mongodb.svg'
import Skill from './Skill';


const skills = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javascript },
    { name: 'Docker', icon: docker },
    { name: 'React', icon: react },
    { name: 'Spring', icon: spring },
    { name: 'PHP', icon: php },
    { name: 'Laravel', icon: laravel },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'Java', icon: java },
    { name: 'MySQL', icon: mysql },
    { name: 'MongoDB', icon: mongodb },
    { name: 'jQuery', icon: jquery }
];


const MySkills = () => {
    return (
        <section className="my-skills">
            <h2 className="section-title">My Skills</h2>

            <div className="skills-container">


                {skills.map(skill => (
                    <Skill key={skill.name} name={skill.name} icon={skill.icon} />
                ))}

            </div>
        </section>
    );
}

export default MySkills;
