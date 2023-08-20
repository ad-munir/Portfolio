/* eslint-disable react/prop-types */

const Skill = ({ name, icon }) => {
    return (
        <div className="skill-card">
            <div className="skill-cercle">
                <img src={icon} alt={name} />
            </div>
            <h3 className="skill-name">{name}</h3>
        </div>
    )
}

export default Skill