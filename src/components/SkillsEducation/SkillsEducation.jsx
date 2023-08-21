import './SkillsEducation.css'
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
import Formation from './Formation'

const skills = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javascript },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'Java', icon: java },
    { name: 'Spring', icon: spring },
    { name: 'Docker', icon: docker },
    { name: 'React', icon: react },
    { name: 'PHP', icon: php },
    { name: 'Laravel', icon: laravel },
    { name: 'MySQL', icon: mysql },
    { name: 'MongoDB', icon: mongodb },
    { name: 'jQuery', icon: jquery }
];

const formations = [
    { year: '2019', diploma: "Bac in Physics", grad:"Trés bien", school:"Qadi Ayad Secondary" },
    { year: '2019 - 2022', diploma: "Licence in Computer Science", grad:"", university:"Abdelmalek Essaadi" ,school:"Faculty of Sciences of Tetuan" },
    { year: '2022 - Now', diploma: "Master in Computer Engineering", grad:"", university:"Abdelmalek Essaadi" ,school:"Faculty of Sciences of Tetuan" }
    
];


const SkillsEducation = () => {
    return (
        <div className='section-three'>
            <h2 className="section-title">Education <span>&</span> Skills</h2>
            <section className="section-content">

                <div className="education">
                    {formations.map(formation => <Formation key={formation.year} year={formation.year} diploma={formation.diploma} grad={formation.grad} university={formation.university} school={formation.school} />)}
                </div>

                <div className="vertical-line" />
                
                <div className="skills">

                    {skills.map(skill => (
                        <Skill key={skill.name} name={skill.name} icon={skill.icon} />
                    ))}

                </div>
            </section>
        </div>
    );
}

export default SkillsEducation;
