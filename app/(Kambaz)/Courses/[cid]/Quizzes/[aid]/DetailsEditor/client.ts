/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

axios.defaults.withCredentials = true;
const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const QUIZZES_API = `${HTTP_SERVER}/api/quizzes`;

// Get all quizzes for a specific course
export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};

// Get a specific quiz by ID
export const findQuiz = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

// Create a new quiz for a course
export const createQuizForCourse = async (courseId: string, quiz: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/quizzes`,
    quiz
  );
  return response.data;
};

// Update an existing quiz
export const updateQuiz = async (quiz: any) => {
  const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data;
};

// Delete a quiz
export const deleteQuiz = async (quizId: string) => {
  const response = await axios.delete(`${QUIZZES_API}/${quizId}`);
  return response.data;
};

// Publish a quiz
export const publishQuiz = async (quizId: string) => {
  const response = await axios.put(`${QUIZZES_API}/${quizId}/publish`);
  return response.data;
};

// Unpublish a quiz
export const unpublishQuiz = async (quizId: string) => {
  const response = await axios.put(`${QUIZZES_API}/${quizId}/unpublish`);
  return response.data;
};

// Get quiz questions
export const findQuestionsForQuiz = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
};

// Create a new question for a quiz
export const createQuestionForQuiz = async (quizId: string, question: any) => {
  const response = await axios.post(
    `${QUIZZES_API}/${quizId}/questions`,
    question
  );
  return response.data;
};

// Update a question
export const updateQuestion = async (quizId: string, question: any) => {
  const response = await axios.put(
    `${QUIZZES_API}/${quizId}/questions/${question._id}`,
    question
  );
  return response.data;
};

// Delete a question
export const deleteQuestion = async (quizId: string, questionId: string) => {
  const response = await axios.delete(
    `${QUIZZES_API}/${quizId}/questions/${questionId}`
  );
  return response.data;
};

// Submit a quiz attempt
export const submitQuizAttempt = async (quizId: string, attempt: any) => {
  const response = await axios.post(
    `${QUIZZES_API}/${quizId}/attempts`,
    attempt
  );
  return response.data;
};

// Get all attempts for a quiz by current user
export const findUserQuizAttempts = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/attempts`);
  return response.data;
};

// Get latest attempt for current user
export const findLatestAttempt = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/attempts/latest`);
  return response.data;
};

// Get attempt count for current user
export const getAttemptCount = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/attempts/count`);
  return response.data;
};

// Get all attempts for a quiz (faculty only)
export const findAllQuizAttempts = async (quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/attempts/all`);
  return response.data;
};