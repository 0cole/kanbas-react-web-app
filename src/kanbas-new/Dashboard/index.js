import { React, useState } from "react";
import db from "../Tools/Database";
import CourseCard from "./CourseCard";
import "./index.css";

function Dashboard() {
	const [courses, setCourses] = useState(db.courses);
	const [course, setCourse] = useState({
		name: "New Course",
		number: "New Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
	});
	const addNewCourse = () => {
		setCourses([...courses, { ...course, _id: new Date().getTime() }]);
	};
	const deleteCourse = (courseId) => {
		setCourses(courses.filter((course) => course._id !== courseId));
	};
	const updateCourse = () => {
		setCourses(
			courses.map((c) => {
				if (c._id === course._id) {
					return course;
				} else {
					return c;
				}
			})
		);
	};

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
