import { Form } from "react-bootstrap";
import "./index.css";

function GradeHeader(courseName) {
	const name = courseName.courseName;
	return (
		<div>
			<div className="wd-grade-header">Grades for {name}</div>
			<div className="wd-grade-search-container">
				<Form>
					<Form.Group className="mb-3 wd-grade-search" controlId="studentSearch">
						<Form.Label>Student Names</Form.Label>
						<Form.Control type="text" placeholder="Search for a Student" />
					</Form.Group>
				</Form>
				<Form>
					<Form.Group className="mb-3 wd-grade-search" controlId="assignmentSearch">
						<Form.Label>Assignment Names</Form.Label>
						<Form.Control type="text" placeholder="Search for an Assignment" />
					</Form.Group>
				</Form>
			</div>
		</div>
	);
}

export default GradeHeader;
