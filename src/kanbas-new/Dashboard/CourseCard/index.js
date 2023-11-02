import logo from "../../northeastern-logo.png";
import { BiMessageSquareEdit } from "react-icons/bi";
import { BiSave } from "react-icons/bi";
import "./index.css";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";

function CourseCard(props) {
	const { course, deleteCourse, setCourse, updateCourse } = props;

	const [isEditing, setIsEditing] = useState(false);
	const [editedName, setEditedName] = useState(course.name);
	const [editedNumber, setEditedNumber] = useState(course.number);

	return (
		<Link to={`/Kanbas/Courses/${course._id}`} className="card wd-course-card">
			<img className="card-img-top wd-course-card-image" src={logo} alt="Northeastern University logo" />
			<div className="card-body wd-course-card-text">
				<div className="wd-course-card-body-top">
					{isEditing ? (
						<>
							<input
								className="wd-course-edit-contents"
								value={editedName}
								onClick={(event) => {
									event.preventDefault();
									event.stopPropagation();
								}}
								onChange={(event) => {
									setEditedName(event.target.value);
									setCourse({ ...course, name: event.target.value });
								}}
							/>
							<input
								className="wd-course-edit-contents"
								value={editedNumber}
								onClick={(event) => {
									event.preventDefault();
									event.stopPropagation();
								}}
								onChange={(event) => {
									setEditedNumber(event.target.value);
									setCourse({ ...course, number: event.target.value });
								}}
							/>
						</>
					) : (
						<>
							<p className="wd-course-name">{course.name}</p>
							<p className="wd-course-number">{course.number}</p>
						</>
					)}
				</div>
				<div className="wd-course-card-body-bottom">
					<button
						className="btn btn-outline-danger wd-course-card-button"
						onClick={(event) => {
							event.preventDefault();
							deleteCourse(course._id);
						}}
					>
						<RxCross1 className="wd-course-card-icon" />
					</button>
					<button
						className="btn btn-outline-danger wd-course-card-button"
						onClick={(event) => {
							event.preventDefault();
							if (isEditing) {
								updateCourse();
							}
							setIsEditing(!isEditing);
						}}
					>
						{isEditing ? (
							<BiSave className="wd-course-card-icon" />
						) : (
							<BiMessageSquareEdit className="wd-course-card-icon" />
						)}
					</button>
				</div>
			</div>
		</Link>
	);
}

export default CourseCard;
