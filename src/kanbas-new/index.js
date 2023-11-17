import "./styles.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./Tools/Navbar";
import MobileNavbar from "./Tools/Navbar/mobile";
import Header from "./Tools/Mobile/MobileHeader";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./Tools/Store";
import axios from "axios";

function Kanbas() {
	const links = ["Calendar", "Account", "Inbox", "History", "Studio", "Commons", "Help"];

	const [courses, setCourses] = useState([]);

	const API_BASE = "https://kanbas-node-server-app-6da5.onrender.com/api";
	const URL = `${API_BASE}/courses`;

	const findAllCourses = async () => {
		const response = await axios.get(URL);
		setCourses(response.data);
	};
	useEffect(() => {
		findAllCourses();
	}, []);
	const [course, setCourse] = useState({
		name: "New Course",
		number: "New Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
	});
	const addNewCourse = async () => {
		const response = await axios.post(URL, course);
		if (response.data) {
			setCourses([...courses, response.data]);
		}
		setCourse(course);
	};
	const deleteCourse = async (course) => {
		const response = await axios.delete(`${URL}/${course._id}`);
		setCourses(courses.filter((c) => c._id !== course._id));
	};
	const updateCourse = async (course) => {
		// setCourse({ ...course, name: course.name, number: course.number });
		console.log(course);
		const response = await axios.put(`${URL}/${course._id}`, course);
		setCourses(
			courses.map((c) => {
				if (c._id === course._id) {
					return course;
				}
				return c;
			})
		);
		setCourse({ name: "" });
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
