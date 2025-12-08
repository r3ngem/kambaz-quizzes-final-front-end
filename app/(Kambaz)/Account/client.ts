/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";
const axiosWithCredentials = axios.create({ 
  baseURL: HTTP_SERVER,
  withCredentials: true 
});

export const USERS_API = `${HTTP_SERVER}/api/users`;

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get("/api/users");
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await axiosWithCredentials.get(`/api/users?role=${role}`);
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axiosWithCredentials.get(`/api/users?name=${name}`);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axiosWithCredentials.get(`/api/users/${id}`);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axiosWithCredentials.delete(`/api/users/${userId}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post("/api/users", user);
  return response.data;
};

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post("/api/users/signin", credentials);
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post("/api/users/profile");
  return response.data;
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post("/api/users/signup", user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`/api/users/${user._id}`, user);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post("/api/users/signout");
  return response.data;
};