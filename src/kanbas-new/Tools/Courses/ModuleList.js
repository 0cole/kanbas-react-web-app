import React from "react";
import { useParams } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";
import db from "../Database";
import "./ModuleList.css";

function ModuleList() {
	const { courseId } = useParams();
	const modules = db.modules;
	return (
		<div>
			<ul className="list-group">
				{modules
					.filter((module) => module.course === courseId)
					.map((module, index) => (
						<div key={index} className="list-group-item wd-module">
							<div className="d-flex align-items-center">
								<BsGripVertical style={{ marginRight: "20px" }} />
								<div>
									<h3>{module.name}</h3>
									<p>{module.description}</p>
								</div>
							</div>
							<div className="d-flex">
								<AiFillCheckCircle style={{ marginRight: "5px", color: "#00b32d" }} />
								<IoEllipsisVertical />
							</div>
						</div>
					))}
			</ul>
		</div>
	);
}

export default ModuleList;
