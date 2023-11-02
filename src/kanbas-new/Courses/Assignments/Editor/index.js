import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { IoEllipsisVertical } from "react-icons/io5";
import { AiFillCheckCircle } from "react-icons/ai";
import "./index.css";
import "../index.css";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import { updateAssignment } from "../assignmentReducer";

function AssignmentEditor() {
	const { assignmentId, courseId } = useParams();
	const assignments = useSelector((state) => state.assignmentReducer.assignments);
	const assignment = assignments.find((assignment) => assignment._id === assignmentId);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [editedTitle, setEditedTitle] = useState("");
	const [editedDescription, setEditedDescription] = useState("");
	const [editedDueDate, setEditedDueDate] = useState("");
	const [editedAvailableFrom, setEditedAvailableFrom] = useState("");

	const handleSave = () => {
		const newTitle = editedTitle !== "" ? editedTitle : assignment.title;
		const newDescription = editedDescription !== "" ? editedDescription : assignment.description;
		const newDueDate = editedDueDate !== "" ? editedDueDate : assignment.dueDate;
		const newAvailableFrom = editedAvailableFrom !== "" ? editedAvailableFrom : assignment.availableFrom;
		dispatch(
			updateAssignment({
				...assignment,
				title: newTitle,
				description: newDescription,
				dueDate: newDueDate,
				availableFrom: newAvailableFrom,
			})
		);
		navigate(`/Kanbas/Courses/${courseId}/Assignments`);
	};

	return (
		<div>
			<div id="wd-course-header" className="d-flex justify-space-between justify-content-end">
				<span className="wd-assignment-edit-publushed-text">
					<AiFillCheckCircle style={{ marginRight: "10px", color: "#00b32d" }} />
					Published
				</span>
				<IoEllipsisVertical style={{ fontSize: "24px" }} />
			</div>
			<div className="wd-edit-assignment-item">
				<form id="assignment-name">
					<label style={{ float: "left" }} htmlFor="assignment-name">
						Assignment Name
					</label>
					<input
						className="form-control"
						id="assignment-name"
						placeholder="Enter assignment name"
						defaultValue={assignment.title}
						onChange={(e) => setEditedTitle(e.target.value)}
					/>
				</form>
			</div>
			<div className="wd-edit-assignment-item">
				<form id="assignment-description">
					<label style={{ float: "left" }} htmlFor="assignment-description"></label>
					<textarea
						className="form-control"
						id="assignment-description"
						cols="70"
						rows="5"
						placeholder="Enter assignment description"
						defaultValue={assignment.description}
						onChange={(e) => setEditedDescription(e.target.value)}
					></textarea>
				</form>
			</div>
			<div className=" wd-edit-assignment-item">
				<p className="wd-edit-assignment-option-text">Points</p>
				<form id="assignment-points">
					<input className="form-control wd-edit-assignment-details-text" id="assignment-points" defaultValue="100" />
				</form>
			</div>
			<div className="wd-edit-assignment-item">
				<p className="wd-edit-assignment-option-text">Assignment Group</p>
				<select className="form-control wd-edit-assignment-details-text ml-2" id="assignment-edit-group">
					<option value="ASSIGNMENTS">ASSIGNMENTS</option>
				</select>
			</div>
			<div className="wd-edit-assignment-item">
				<p className="wd-edit-assignment-option-text">Display Grade As</p>
				<select className="form-control wd-edit-assignment-details-text ml-2" id="assignment-edit-display-score">
					<option value="ASSIGNMENTS">Percentage</option>
				</select>
			</div>
			<div className="wd-edit-assignment-item" style={{ maxWidth: "fit-content", marginLeft: "5pc" }}>
				<div className="form-check">
					<input className="form-check-input" type="checkbox" id="count-assignment" />
					<label className="form-check-label" htmlFor="count-assignment">
						Do not count this assignment towards final grade
					</label>
				</div>
			</div>
			<div className="wd-edit-assignment-item">
				<p className="wd-edit-assignment-option-text">Submission Type</p>
				<div className="wd-edit-assignment-option-container">
					<select className="form-control mb-3" id="assignment-edit-submission-type">
						<option value="ONLINE">Online</option>
					</select>
					<p style={{ textAlign: "left" }}>Online Entry Options</p>
					{["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Uploads"].map(
						(entry, index) => (
							<div className="form-check" key={index}>
								<input className="form-check-input" type="checkbox" id={entry.replace(" ", "-")} />
								<label className="form-check-label" htmlFor={entry.replace(" ", "-")}>
									{entry}
								</label>
							</div>
						)
					)}
				</div>
			</div>
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
						<input
							className="form-control"
							id="due-date"
							placeholder="Enter assignment name"
							defaultValue={assignment.dueDate}
							onChange={(e) => setEditedDueDate(e.target.value)}
						/>
					</form>
					<div className="d-flex">
						<form className="mb-4" id="assignment-name">
							<label className="wd-assignment-dates" htmlFor="available-from">
								Available From
							</label>
							<input
								className="form-control"
								id="available-from"
								placeholder="Enter assignment name"
								defaultValue={assignment.dueDate}
								onChange={(e) => setEditedDueDate(e.target.value)}
							/>
						</form>
						<form className="mb-4" id="assignment-name">
							<label className="wd-assignment-dates" htmlFor="date-due">
								Until
							</label>
							<input
								className="form-control"
								id="due-date"
								placeholder="Enter assignment name"
								defaultValue={assignment.dueDate}
								onChange={(e) => setEditedDueDate(e.target.value)}
							/>
						</form>
					</div>
				</div>
			</div>
			<div>
				<Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
					Cancel
				</Link>
				<button onClick={handleSave} className="btn btn-success" style={{ marginLeft: "5px" }}>
					Save
				</button>
			</div>
		</div>
	);
}

export default AssignmentEditor;
