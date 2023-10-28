import { React } from "react";
import CourseCard from "./CourseCard";
import "./index.css";

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
				<h1>Dashboard</h1>
				<h5>Course</h5>
				<input
					value={course.name}
					className="form-control"
					onChange={(e) => setCourse({ ...course, name: e.target.value })}
				/>
				<input
					value={course.number}
					className="form-control"
					onChange={(e) => setCourse({ ...course, number: e.target.value })}
				/>
				<input
					value={course.startDate}
					className="form-control"
					type="date"
					onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
				/>
				<input
					value={course.endDate}
					className="form-control"
					type="date"
					onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
				/>
				<button onClick={addNewCourse}>Add</button>
				<button onClick={updateCourse}>Update</button>

				<div className="list-group d-flex flex-wrap flex-row">
					{courses.map((course) => (
						<CourseCard course={course} deleteCourse={deleteCourse} setCourse={setCourse}></CourseCard>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
