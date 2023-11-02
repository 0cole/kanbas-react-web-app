import React, { useState } from "react"; 
import "./ModuleList.css";
import { useParams } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { BsGripVertical } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoEllipsisVertical } from "react-icons/io5";
import { BiMessageSquareEdit } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule } from "../../Courses/Modules/modulesReducer";

function ModuleList() {
	const { courseId } = useParams();
	const modules = useSelector((state) => state.modulesReducer.modules);
	const module = useSelector((state) => state.modulesReducer.module);
	const dispatch = useDispatch();

	const [editModuleId, setEditModuleId] = useState(null);
	const [editedName, setEditedName] = useState("");
	const [editedDescription, setEditedDescription] = useState("");

	const handleEdit = (moduleId, name, description) => {
		setEditModuleId(moduleId);
		setEditedName(name);
		setEditedDescription(description);
	};

	const handleSave = () => {
		const editedModule = modules.find((m) => m._id === editModuleId);
		if (editedModule) {
			dispatch(
				updateModule({
					...editedModule,
					name: editedName,
					description: editedDescription,
				})
			);
			setEditModuleId(null);
		}
	};

	return (
		<div>
			<button className="btn btn-primary" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
				<AiOutlinePlus />
			</button>

			<ul className="list-group">
				{modules
					.filter((module) => module.course === courseId)
					.map((module, index) => (
						<div key={index} className="list-group-item wd-module">
							<div className="d-flex align-items-center">
								<BsGripVertical style={{ marginRight: "20px" }} />
								{editModuleId === module._id ? (
									<div className="wd-module-edit">
										<div className="wd-module-edit-text">
											<input
												className="wd-module-name"
												value={editedName}
												onChange={(e) => setEditedName(e.target.value)}
											/>
											<textarea
												className="wd-module-description"
												value={editedDescription}
												onChange={(e) => setEditedDescription(e.target.value)}
											/>
										</div>

										<button className="btn btn-primary" onClick={handleSave}>
											Save
										</button>
									</div>
								) : (
									<div>
										<h3>{module.name}</h3>
										<p>{module.description}</p>
									</div>
								)}
							</div>
							<button
								className="wd-module-button"
								onClick={() => dispatch(deleteModule(module._id))}
								style={{ position: "absolute", right: "0", top: "0" }}
							>
								<RxCross1 className="wd-module-icon" />
							</button>

							<div className="d-flex align-items-center">
								<button
									className="wd-module-button"
									onClick={() => handleEdit(module._id, module.name, module.description)}
								>
									<BiMessageSquareEdit className="wd-module-icon" />
								</button>
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
