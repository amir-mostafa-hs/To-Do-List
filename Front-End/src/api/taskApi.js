import axios from "axios";

const baseUrl = "http://localhost:5000";

export const getAllTaskApi = async () => {
  try {
    const data = await axios.get(baseUrl);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getOneTaskApi = async (id) => {
  try {
    const data = await axios.get(`${baseUrl}/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createTaskApi = (task) => {
  try {
    axios.post(baseUrl, task);
  } catch (error) {
    console.error(error);
  }
};

export const updateTaskApi = (id, task) => {
  try {
    axios.patch(`${baseUrl}/${id}`, task);
  } catch (error) {
    console.error(error);
  }
};

export const deleteTaskApi = (id) => {
  try {
    axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
