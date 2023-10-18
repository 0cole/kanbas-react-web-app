import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation(courseId) {
	const id = parseInt(courseId.courseId);
	const { pathname } = useLocation();
	const links = [
		"Home",
		"Modules",
		"Piazza",
		"Zoom",
		"Assignments",
		"Quizzes",
		"Grades",
		"Panopto",
		"Discussions",
		"Announcements",
		"Pages",
		"Files",
		"Rubrics",
		"Outcomes",
		"Collaborations",
		"Syllabus",
		"Progress",
		"Settings",
	];

	return (
		<div className="col wd-navbar-secondary">
			{links.map((link, index) => (
				<Link key={index} to={`../../../Kanbas/Courses/${id}/${link}`} className={`list-group-item ${pathname.includes(link) && "active"}`}>
					{link}
				</Link>
			))}
		</div>
	);
}

export default CourseNavigation;
