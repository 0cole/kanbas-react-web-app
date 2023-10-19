import db from "../../Tools/Database";
import { useParams } from "react-router-dom";
import GradeHeader from "./GradeHeader";
import { Table } from "react-bootstrap";
import "./index.css";

function Grades() {
	const { courseId } = useParams();
	const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
	const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
	const course = db.courses.find((course) => course._id === courseId);
	const courseName = course.name;
	return (
		<div>
			<GradeHeader courseName={courseName} />
			<div className="table-responsive">
				<Table className="striped border hover">
					<thead>
						<th>Student Name</th>
						{assignments.map((assignment) => (
							<th>{assignment.title}</th>
						))}
					</thead>
					<tbody>
						{enrollments.map((enrollment) => {
							const user = db.users.find((user) => user._id === enrollment.user);
							return (
								<tr>
									<td>
										{user.firstName} {user.lastName}
									</td>
									{assignments.map((assignment) => {
										const grade = db.grades.find(
											(grade) => grade.student === enrollment.user && grade.assignment === assignment._id
										);
										return <td>{grade?.grade || ""}</td>;
									})}
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		</div>
	);
}

export default Grades;
