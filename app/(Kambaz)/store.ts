import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./Courses/reducer";
import modulesReducer from "./Courses/[cid]/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/[cid]/Assignments/reducer";
import quizReducer from "./Courses/[cid]/Quizzes/[qid]/DetailsEditor/reducer"
export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
 reducer: { coursesReducer,
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    quizReducer
  },
});
export default store;