import { createSlice } from "@reduxjs/toolkit";
import db from "../../Tools/Database";

const initialState = {
	assignments: db.assignments,
	assignment: { title: "New Assignment", description: "New Description"},
};

const assignmentSlice = createSlice({
	name: "assignments",
	initialState,
	reducers: {
		addAssignment: (state, action) => {
			state.assignments = [{ ...action.payload, _id: new Date().getTime().toString() }, ...state.assignments];
		},
		deleteAssignment: (state, action) => {
			state.assignments = state.assignments.filter((assignment) => assignment._id !== action.payload);
		},
		updateAssignment: (state, action) => {
			state.assignments = state.assignments.map((assignment) => {
				if (assignment._id === action.payload._id) {
					return action.payload;
				} else {
					return assignment;
				}
			});
		},
	},
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;