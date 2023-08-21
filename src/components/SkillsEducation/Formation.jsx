/* eslint-disable react/prop-types */

const Formation = ({ year, diploma, grad, university, school }) => {
    return (
        <div className="formation-card">
            <h3 className="year">{year}</h3>
            <h3 className="diplome">{diploma}{grad && <span>: {grad}</span>} </h3>
            <h3 className="school">{university}</h3>
            <h3 className="school">{school}</h3>
        </div>
    )
}

export default Formation