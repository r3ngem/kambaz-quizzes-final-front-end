import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${process.env.NEXT_PUBLIC_HTTP_SERVER}/api/enrollments/${courseId}`);
  return response.data;
};

export const getAvailableCourses = async () => {
  const response = await axiosWithCredentials.get(`${process.env.NEXT_PUBLIC_HTTP_SERVER}/api/enrollments/available`);
  return response.data;
};