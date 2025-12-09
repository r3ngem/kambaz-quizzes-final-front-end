import axios from "axios";

axios.defaults.withCredentials = true;
const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;

// =======================
// QUIZ CRUD
// =======================

// Get all quizzes for a course
export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};

// Alias for compatibility
export const findQuizzesByCourse = findQuizzesForCourse;

// Get a single quiz
export const findQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

// Create a new quiz
export const createQuizForCourse = async (courseId: string, quiz: any) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
  return response.data;
};

// Update a quiz
export const updateQuiz = async (quiz: any) => {
  const response = await axiosWithCredentials.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data;
};

// Delete a quiz
export const deleteQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

// Toggle publish status
export const togglePublish = async (quizId: string) => {
  const response = await axiosWithCredentials.put(`${QUIZZES_API}/${quizId}/publish`);
  return response.data;
};

// =======================
// QUESTIONS
// =======================

// Get questions for a quiz
export const findQuestionsForQuiz = async (quizId: string) => {
  const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
};

// Create a question
export const createQuestionForQuiz = async (quizId: string, question: any) => {
  const response = await axiosWithCredentials.post(`${QUIZZES_API}/${quizId}/questions`, question);
  return response.data;
};

// Update a question
export const updateQuestion = async (quizId: string, question: any) => {
  const response = await axiosWithCredentials.put(`${QUIZZES_API}/${quizId}/questions/${question._id}`, question);
  return response.data;
};

// Delete a question
export const deleteQuestion = async (quizId: string, questionId: string) => {
  const response = await axiosWithCredentials.delete(`${QUIZZES_API}/${quizId}/questions/${questionId}`);
  return response.data;
};

// =======================
// QUIZ ATTEMPTS
// =======================

// Submit an attempt
export const submitQuizAttempt = async (quizId: string, attempt: any) => {
  const response = await axiosWithCredentials.post(`${QUIZZES_API}/${quizId}/attempts`, attempt);
  return response.data;
};

// Get user's attempts
export const findUserQuizAttempts = async (quizId: string) => {
  const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}/attempts`);
  return response.data;
};

// Get latest attempt
export const findLatestAttempt = async (quizId: string) => {
  const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}/attempts/latest`);
  return response.data;
};

// Get attempt count
export const getAttemptCount = async (quizId: string) => {
  const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}/attempts/count`);
  return response.data;
};
