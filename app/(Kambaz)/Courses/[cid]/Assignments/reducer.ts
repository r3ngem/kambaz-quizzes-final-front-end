/* eslint-disable @typescript-eslint/no-explicit-any */
import { assignments } from "../../../Database";
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
 assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        due: assignment.due,
        release: assignment.release,
        course: assignment.course
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload}) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== payload);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;