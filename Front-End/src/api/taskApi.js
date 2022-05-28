import axios from "axios";

const baseUrl = "http://localhost:5000/";

export const getAllTask = () => {
  try {
    const data = axios.get(baseUrl);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getOneTask = (id) => {
  try {
    const data = axios.get(`${baseUrl}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTask = (task) => {
  try {
    axios.post(baseUrl, task);
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = (id, task) => {
  try {
    axios.patch(`${baseUrl}/${id}`, task);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = (id) => {
  try {
    axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
