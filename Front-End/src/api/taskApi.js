import axios from "axios";

const baseUrl = "http://localhost:5000/";

export const getAllTask = async () => {
  try {
    const data = await axios.get(baseUrl);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getOneTask = async (id) => {
  try {
    const data = await axios.get(`${baseUrl}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTask = async (task) => {
  try {
    axios.post(baseUrl, task);
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = async (id, task) => {
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
