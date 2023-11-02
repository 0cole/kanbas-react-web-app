import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlusLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import "./index.css";
import "../index.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment } from "./assignmentReducer";

function Assignments() {
	const { courseId } = useParams();
	const assignments = useSelector((state) => state.assignmentReducer.assignments);
	const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
	const dispatch = useDispatch();

	

	return (
		<div>
			<AssignmentPageHeader />
			<div className="list-group">
				<AssignmentListHeader />
				{courseAssignments.map((assignment) => (
					<Link
						key={assignment._id}
						to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
						className="list-group-item d-flex align-items-center"
					>
						<div className="wd-assignment">
							<div>
								<BsGripVertical style={{ marginRight: "5px" }} />
								<FiEdit2 style={{ color: "#00b32d", marginRight: "5px" }} />
								{assignment.title}
							</div>
							<div className="wd-assignment-delete">
								<button
									className="btn btn-outline-danger wd-assignment-button"
									onClick={(event) => {
										event.preventDefault();
										dispatch(deleteAssignment(assignment._id));
									}}
								>
									<RxCross1 className="wd-assignment-icon" />
								</button>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

function AssignmentPageHeader() {
	const { courseId } = useParams();
	const assignment = useSelector((state) => state.assignmentReducer.assignment);
	const dispatch = useDispatch();
	return (
		<div id="wd-course-header" className="d-flex justify-space-between">
			<div className="wd-course-assignment-search">
				<div className="input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Search for an assignment"
						aria-label="Search for an assignment"
						aria-describedby="button-addon2"
					/>
				</div>
			</div>
			<div className="wd-course-header-buttons">
				<button className="btn btn-primary wd-course-header-btn">
					<span className="wd-btn-text">Group</span>
				</button>
				<button
					className="btn btn-danger wd-course-header-btn"
					onClick={() => {
						dispatch(addAssignment({ ...assignment, course: courseId }));
					}}
				>
					<span className="wd-btn-text">
						{" "}
						<BsPlusLg /> Assignment
					</span>
				</button>
				<button className="btn btn-primary wd-course-header-btn">
					<span className="wd-btn-text">
						<IoEllipsisVertical />
					</span>
				</button>
			</div>
		</div>
	);
}

function AssignmentListHeader() {
	return (
		<div className="list-group-item list-group-item-secondary d-flex wd-assignment-list-header">
			<div className="d-flex align-items-center">
				<BsGripVertical style={{ marginRight: "3px" }} />
				<h3>Assignments</h3>
			</div>
			<div className="">
				<button className="btn btn-primary">
					<span className="wd-btn-text">40% of total</span>
				</button>
			</div>
		</div>
	);
}

export default Assignments;
