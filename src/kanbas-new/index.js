import "./styles.css";
import "./Tools/Navbar/index.css";
import Navbar from "./Tools/Navbar";
import MobileNavbar from "./Tools/Navbar/mobile";
import Header from "./Tools/Mobile/MobileHeader";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Tools/Database";
import { useState } from "react";
import store from "./Tools/Store";
import { Provider } from "react-redux";

function Kanbas() {
	const links = ["Calendar", "Account", "Inbox", "History", "Studio", "Commons", "Help"];

	const [courses, setCourses] = useState(db.courses);
	const [course, setCourse] = useState({
		name: "New Course",
		number: "New Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
	});
	const addNewCourse = () => {
		setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
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
		<Provider store={store}>
			<div>
				<div className="row-12 d-md-none">
					<Header />
				</div>
				<div className="d-flex">
					<div className="col-1 d-none d-md-block">
						<Navbar />
					</div>
					<div className="col-sm-12 col-md-11">
						<Routes>
							{links.map((link, index) => (
								<Route
									path={`/${link}`}
									element={
										<h1 className="d-flex justify-content-center" style={{ marginTop: "9em" }}>
											This page has not yet been configured.
										</h1>
									}
									key={link}
								/>
							))}
							<Route path="/" element={<Navigate to="Dashboard" />} />
							<Route
								path="Dashboard"
								element={
									<Dashboard
										courses={courses}
										course={course}
										setCourse={setCourse}
										addNewCourse={addNewCourse}
										deleteCourse={deleteCourse}
										updateCourse={updateCourse}
									/>
								}
							/>
							<Route path="Courses" element={<Navigate to="../Dashboard" />} />
							<Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
							<Route path="MobileNavbar" element={<MobileNavbar />} />
						</Routes>
					</div>
				</div>
			</div>
		</Provider>
	);
}
export default Kanbas;
