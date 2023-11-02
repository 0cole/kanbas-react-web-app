import { React } from "react";
import CourseCard from "./CourseCard";
import "./index.css";
import { BsPlusLg } from "react-icons/bs";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
	return (
		<div className="wd-main-content">
			<div className="row wd-header d-none d-md-block">
				<div className="col d-flex wd-header-title">Dashboard</div>
			</div>
			<div className="wd-dashboard-published-courses">
				<h3>Published Courses: {courses.length} </h3>
			</div>
			<div className="row wd-dashboard wd-content">
				<div>
					<button className="btn btn-danger" onClick={addNewCourse}>
						<span className="wd-btn-text">
							{" "}
							<BsPlusLg />
						</span>
					</button>
				</div>
				<div className="list-group d-flex flex-wrap flex-row">
					{courses.map((course) => (
						<CourseCard
							course={course}
							deleteCourse={deleteCourse}
							setCourse={setCourse}
							updateCourse={updateCourse}
						></CourseCard>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
