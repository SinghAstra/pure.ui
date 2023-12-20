import axios from "axios";
const API_URL = "http://localhost:5000/";
// const API_URL = "https://tourtrackr.onrender.com/";
export const createPostApi = ({
  title,
  message,
  creator,
  tags,
  selectedFile,
}) =>
  axios.post(`${API_URL}post`, { title, message, creator, tags, selectedFile });
export const getAllPostApi = () => axios.get(`${API_URL}post`);
export const updatePostApi = (id, updatedFormData) =>
  axios.put(`${API_URL}post/${id}`, updatedFormData);
export const deletePostApi = (id) => axios.delete(`${API_URL}post/${id}`);
export const likePostApi = (id) => axios.put(`${API_URL}post/${id}/likePost`);
export const signInApi = (formData) =>
  axios.post(`${API_URL}user/signIn`, {
    email: formData.email,
    password: formData.password,
  });
export const signUpApi = (formData) =>
  axios.post(`${API_URL}user/signUp`, formData);
