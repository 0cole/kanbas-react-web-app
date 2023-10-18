import db from "../Tools/Database";
import CourseCard from "./CourseCard";
import "./index.css";

function Dashboard() {
	const courses = db.courses;

	return (
		<div className="wd-main-content">
			<div className="row wd-header d-none d-md-block">
				<div className="col d-flex wd-header-title">Dashboard</div>
			</div>
			<div className="wd-dashboard-published-courses">
				<h3>Published Courses: {courses.length} </h3>
			</div>
			<div className="row wd-dashboard wd-content">
				<div className="list-group d-flex flex-wrap flex-row">
					{courses.map((course) => (
						<CourseCard
							key={course._id}
							to={`Kanbas/Courses/${course._id}`}
							name={course.name}
							description={course.description}
							id={course._id}
							number={course.number}
							start={course.startDate}
							end={course.endDate}
						></CourseCard>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
