import logo from "../../northeastern-logo.png";
import { BiMessageSquareEdit } from "react-icons/bi";
import "./index.css";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

function CourseCard(props) {
	const { course, deleteCourse, setCourse } = props;

	return (
		<Link to={`/Kanbas/Courses/${course._id}`} className="card wd-course-card">
			<img className="card-img-top wd-course-card-image" src={logo} alt="Northeastern University logo" />
			<div className="card-body wd-course-card-text">
				<div className="wd-course-card-body-top">
					<p className="wd-course-name">{course.name}</p>
					<p className="wd-course-text">{course.number}</p>
				</div>
				<div className="wd-course-card-body-bottom">
					<button
						className="btn btn-outline-danger wd-course-card-button"
						onClick={(event) => {
							event.preventDefault();
							deleteCourse(course._id);
						}}
					>
						<RxCross1 className="wd-course-card-icon" />
					</button>
					<button
						className="btn btn-outline-danger wd-course-card-button"
						onClick={(event) => {
							event.preventDefault();
							setCourse(course);
						}}
					>
						<BiMessageSquareEdit className="wd-course-card-icon" />
					</button>
				</div>
			</div>
		</Link>
	);
}

export default CourseCard;
