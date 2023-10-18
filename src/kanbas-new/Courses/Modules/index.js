import "../index.css";
import "../../styles.css";
import CourseHeader from "../../Tools/Courses/CourseHeader";
import ModuleList from "../../Tools/Courses/ModuleList";

function Modules() {
	return (
		<div className="d-flex m-2 col-sm-12 col-md-11 ">
			<div className="">
				<CourseHeader />
				<ModuleList />
			</div>
		</div>
	);
}

export default Modules;
