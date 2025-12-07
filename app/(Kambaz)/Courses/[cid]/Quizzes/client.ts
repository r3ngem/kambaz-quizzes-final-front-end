/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const findQuizzesByCourse = async (courseId: string) => {
  const res = await axiosWithCredentials.get(`/api/courses/${courseId}/quizzes`);
  return res.data;
};

export const createQuiz = async (courseId: string) => {
  const res = await axiosWithCredentials.post(`/api/courses/${courseId}/quizzes`, { title: "New Quiz" });
  return res.data;
};

export const updateQuiz = async (quizId: string, quiz: any) => {
  await axiosWithCredentials.put(`/api/quizzes/${quizId}`, quiz);
};

export const deleteQuiz = async (quizId: string) => {
  await axiosWithCredentials.delete(`/api/quizzes/${quizId}`);
};
