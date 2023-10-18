import "./index.css";
import "../index.css";
import "../../styles.css";
import CourseHeader from "../../Tools/Courses/CourseHeader";
import ModuleList from "../../Tools/Courses/ModuleList";
import RightSidebar from "./RightSidebar";

function Home() {
	return (
		<div className="d-flex">
			<div className="col-9">
				<CourseHeader />
				<ModuleList />
			</div>
			<div className="d-none d-sm-block col-sm-4 col-md-3 wd-right-sidebar">
				<RightSidebar />
			</div>
		</div>
	);
}

export default Home;
