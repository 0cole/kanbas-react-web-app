import { BsThreeDotsVertical } from "react-icons/bs";
import "../../Courses/index.css"

function CourseHeader() {
	return (
		<div id="wd-course-header" className="row wd-header p-0 ">
			<div className="col d-flex justify-content-end">
				<button className="btn btn-primary">
					<span className="wd-btn-text">Collapse All</span>
				</button>
				<button className="btn btn-primary">
					<span className="wd-btn-text">View Progress</span>
				</button>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						id="publish-dropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<span className="wd-btn-text">
							<i className="fa fa-check-circle" aria-hidden="true"></i> Publish All
						</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="publish-dropdown">
						<li>
							<a className="dropdown-item" href="./Home">
								Item 1
							</a>
						</li>
					</ul>
				</div>
				<button className="btn btn-danger">
					<span className="wd-btn-text">
						<i className="fa fa-plus" aria-hidden="true"></i> Module
					</span>
				</button>
				<button className="btn btn-primary">
					<span className="wd-btn-text">
						<BsThreeDotsVertical />
					</span>
				</button>
			</div>
		</div>
	);
}

export default CourseHeader;