import "./index.css";
import { IoAlertCircleSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

function RightSidebar() {
	const buttonNames = [
		"Import Existing Content",
		"Import From Commons",
		"Choose Home Page",
		"View Course Stream",
		"New Announcement",
		"New Analytics",
		"View Course Notifications",
	];

	return (
		<div>
			<h5>Course Status</h5>
			<div className="row" style={{ justifyContent: "center" }}>
				<div className="col wd-right-sidebar-container">
					{buttonNames.map((name) => (
						<button className="btn btn-primary wd-right-sidebar-button" key={name}>
							<span className="wd-btn-text">{name}</span>
						</button>
					))}
				</div>
				<div className="wd-right-sidebar-container">
					<h5 className="wd-todo">To Do</h5>
					<hr />
					<div className="wd-todo-item">
						<IoAlertCircleSharp style={{ color: "#d21414", float: "left"  }} />
						<span className="wd-course-right-sidebar-todo-text">Grade A1 : ENV + HTMl</span>
                        <RxCross1 style={{ color: "#939495", float: "right"}} />
					</div>
					<div className="wd-todo-item">
						<IoAlertCircleSharp style={{ color: "#d21414", float: "left"  }} />
						<span className="wd-course-right-sidebar-todo-text">Grade A2: CSS + BOOTSTRAP</span>
                        <RxCross1 style={{ color: "#939495", float: "right"}} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default RightSidebar;
