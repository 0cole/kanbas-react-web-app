import logo from "../../northeastern-logo.png";
import { BiMessageSquareEdit } from "react-icons/bi";
import "./index.css";

import { Link } from "react-router-dom";

function CourseCard(props) {
    const name = props.name;
    const number = props.number;
    const id = props.id;

    return (
        <Link to={`/Kanbas/Courses/${id}`} className="card wd-course-card">
            <img className="card-img-top wd-course-card-image" src={logo} alt="Northeastern University logo" />
            <div className="card-body wd-course-card-text">
                <p className="wd-course-name">{name}</p>
                <p className="wd-course-text">{number}</p>
                <BiMessageSquareEdit className="wd-course-card-icon" />
            </div>
        </Link>
    );
}

export default CourseCard;
