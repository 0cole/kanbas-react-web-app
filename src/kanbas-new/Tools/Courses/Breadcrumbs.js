import "./Breadcrumbs.css";
import "../../styles.css";
import { useLocation } from "react-router";

function Breadcrumbs({ name, page }) {
	const courseName = name;
	const { pathname } = useLocation();
	const pathParts = pathname.split("/");
	const breadcrumbs = [];
	for (let i = 4; i < pathParts.length; i++) {
		breadcrumbs.push(pathParts[i]);
	}
	const courseId = pathParts[3];

	return (
		<div className="row wd-header">
			<div className="col d-flex wd-breadcrumbs-container">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item" key="courseName">
							<a className="wd-breadcrumb-link" href={`../../../#/Kanbas/Courses/${courseId}`}>
								{courseName}
							</a>
						</li>
                        {breadcrumbs.map((bc) => {
							return (
								<li className="breadcrumb-item active" key={bc}>
									{bc}
								</li>
							);
						})}
					</ol>
				</nav>
			</div>
		</div>
	);
}

export default Breadcrumbs;
