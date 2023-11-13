import { useParams, useLocation, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from "../Tools/SecondaryNavigation/CourseNavigation";
import Home from "./Home";
import Modules from "./Modules";
import Grades from "./Grades";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import MobileCourseNav from "./MobileCourseNav";
import Breadcrumbs from "../Tools/Courses/Breadcrumbs";
import { IoEllipsisVertical } from "react-icons/io5";
import "./index.css";

function Courses(props) {
	const { courseId } = useParams();
	const courses = props.courses;
	const course = courses.find((course) => course._id === courseId);
	const page = useLocation().pathname.split("/").pop();
	if (!course) {
		return <div>Course not found</div>;
	}
	return (
		<div className="wd-main-content">
			<div className="d-none d-md-block">
				<Breadcrumbs course={course} name={course.name} page={page} />
			</div>
			<div className="d-flex">
				<div className="d-none d-md-block">
					<CourseNavigation courseId={course._id} />
				</div>
				<div className="d-block d-md-none" style={{ width: "30px", zIndex: "1" }}>
					<Link to={`/Kanbas/Courses/${courseId}/MobileCourseNav`}>
						<IoEllipsisVertical style={{ fontSize: "24px", color: "rgb(208, 15, 15)" }} />
					</Link>
				</div>

				<div
					className="col-10 float-right wd-page-content"
					style={{
						left: "300px",
						top: "85px",
					}}
				>
					<Routes>
						<Route path="/" element={<Navigate to="Home" />} />
						<Route path="Home" element={<Home />} />
						<Route path="Modules" element={<Modules />} />
						<Route path="Assignments" element={<Assignments />} />
						<Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
						<Route path="Grades" element={<Grades />} />
						<Route path="MobileCourseNav" element={<MobileCourseNav courseId={course._id} />} />
						<Route
							path="/*"
							element={
								<h1 className="d-flex justify-content-center" style={{ marginTop: "8em" }}>
									This page has not yet been configured.
								</h1>
							}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
}
export default Courses;
