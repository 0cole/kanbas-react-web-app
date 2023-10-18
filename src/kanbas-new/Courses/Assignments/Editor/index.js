import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Tools/Database";
import { IoEllipsisVertical } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";
import "./index.css";
import "../index.css";
import "../../index.css";

function AssignmentEditor() {
	const { assignmentId } = useParams();
	const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);

	const { courseId } = useParams();

	return (
		<div>
			<AssignmentEditorPageHeader />
			<AssignmentName assignment={assignment} />
			<AssignmentDescription />
			<div className="d-flex flex-column mb-2">
				<AssignmentPoints />
				<AssignmentGroup />
				<DisplayGradeAs />
				<CountAsGradeCheckbox />
				<EditSubmissionType />
				<AssignmentDates />
			</div>
			<ExitButtons courseId={courseId} />
		</div>
	);
}

function AssignmentEditorPageHeader() {
	return (
		<div id="wd-course-header" className="d-flex justify-space-between justify-content-end">
			<span className="wd-assignment-edit-publushed-text">
				<AiFillCheckCircle style={{ marginRight: "10px", color: "#00b32d" }} />
				Published
			</span>
			<IoEllipsisVertical style={{ fontSize: "24px" }} />
		</div>
	);
}

function AssignmentName({ assignment }) {
	return (
		<div className="wd-edit-assignment-item">
			<form id="assignment-name">
				<label style={{ float: "left" }} htmlFor="assignment-name">
					Assignment Name
				</label>
				<input className="form-control" id="assignment-name" defaultValue={assignment.title} />
			</form>
		</div>
	);
}

function AssignmentDescription() {
	return (
		<div className="wd-edit-assignment-item">
			<form id="assignment-description">
				<label style={{ float: "left" }} htmlFor="assignment-description">
					Assignment Description
				</label>
				<textarea
					className="form-control"
					id="assignment-description"
					cols="50"
					rows="5"
					defaultValue="This is a placeholder description that will change in later assignments."
				></textarea>
			</form>
		</div>
	);
}

function AssignmentPoints() {
	return (
		<div className=" wd-edit-assignment-item">
			<p className="wd-edit-assignment-option-text">Points</p>
			<form id="assignment-points">
				<input className="form-control wd-edit-assignment-details-text" id="assignment-points" defaultValue="100" />
			</form>
		</div>
	);
}

function AssignmentGroup() {
	return (
		<div className="wd-edit-assignment-item">
			<p className="wd-edit-assignment-option-text">Assignment Group</p>
			<select className="form-control wd-edit-assignment-details-text ml-2" id="assignment-edit-group">
				<option value="ASSIGNMENTS">ASSIGNMENTS</option>
			</select>
		</div>
	);
}

function DisplayGradeAs() {
	return (
		<div className="wd-edit-assignment-item">
			<p className="wd-edit-assignment-option-text">Display Grade As</p>
			<select className="form-control wd-edit-assignment-details-text ml-2" id="assignment-edit-display-score">
				<option value="ASSIGNMENTS">Percentage</option>
			</select>
		</div>
	);
}

function CountAsGradeCheckbox() {
	return (
		<div className="wd-edit-assignment-item" style={{ maxWidth: "fit-content", marginLeft: "5pc" }}>
			<div className="form-check">
				<input className="form-check-input" type="checkbox" id="count-assignment" />
				<label className="form-check-label" htmlFor="count-assignment">
					Do not count this assignment towards final grade
				</label>
			</div>
		</div>
	);
}

function EditSubmissionType() {
	return (
		<div className="wd-edit-assignment-item">
			<p className="wd-edit-assignment-option-text">Submission Type</p>
			<div className="wd-edit-assignment-option-container">
				<select className="form-control mb-3" id="assignment-edit-submission-type">
					<option value="ONLINE">Online</option>
				</select>
				<p style={{ textAlign: "left" }}>Online Entry Options</p>
				{["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Uploads"].map((entry, index) => (
					<div className="form-check" key={index}>
						<input className="form-check-input" type="checkbox" id={entry.replace(" ", "-")} />
						<label className="form-check-label" htmlFor={entry.replace(" ", "-")}>
							{entry}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}

function AssignmentDates() {
	return (
		<div className="wd-edit-assignment-item">
			<p className="wd-edit-assignment-option-text">Assign</p>
			<div className="wd-edit-assignment-option-container">
				<form className="mb-4" id="assignment-name">
					<label className="wd-assignment-dates" htmlFor="assign-to">
						Assign To
					</label>
					<input className="form-control" id="assign-to" defaultValue="Everyone" />
				</form>
				<form className="mb-4" id="assignment-name">
					<label className="wd-assignment-dates" htmlFor="date-due">
						Due
					</label>
					<input className="form-control" id="date-due" defaultValue="MM DD YYY 11:59 PM" />
				</form>
				<div className="d-flex">
					<form className="mb-4" id="assignment-name">
						<label className="wd-assignment-dates" htmlFor="assign-to">
							Availale From
						</label>
						<input className="form-control" id="assign-to" defaultValue="MM DD YYY 11:59 PM" />
					</form>
					<form className="mb-4" id="assignment-name">
						<label className="wd-assignment-dates" htmlFor="date-due">
							Until
						</label>
						<input className="form-control" id="date-due" defaultValue="" />
					</form>
				</div>
			</div>
		</div>
	);
}

function ExitButtons({ courseId }) {
	const navigate = useNavigate();
	const handleSave = () => {
		console.log("Actually saving assignment TBD in later assignments");
		navigate(`/Kanbas/Courses/${courseId}/Assignments`);
	};
	return (
		<div>
			<Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
				Cancel
			</Link>
			<button onClick={handleSave} className="btn btn-success" style={{marginLeft: "5px"}}>
				Save
			</button>
		</div>
	);
}

export default AssignmentEditor;
