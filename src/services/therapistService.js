import axios from "./axios";

const getAllThearapists = () => {
  return axios.post(`/therapy/therapists/by-concerns`);
};

const getFilteredTherapists = (data) => {
  return axios.post(`/therapy/therapists/by-all-filters`, data);
};

const getThearpistByName = (name) => {
  return axios.get(`therapists/by-name/${name}`);
};
const therapistService = {
  getFilteredTherapists,
  getAllThearapists,
};

export default therapistService;
