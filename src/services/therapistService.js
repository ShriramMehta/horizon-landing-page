import axios from "./axios";

const getAllThearapists = () => {
  return axios.post(`/therapy/therapists/by-concerns`);
};

const getFilteredTherapists = (data) => {
  return axios.post(`/therapy/therapists/by-all-filters`, data);
};

const getThearpistById = (Id) => {
  return axios.get(`/therapists/${Id}`)
}

const getThearpistByName = (name) => {
  return axios.get(`therapists/by-name/${name}`);
};

const getFeedbackById = (Id) => {
  return axios.get(`/feedback/${Id}`)

}


const therapistService = {
  getFilteredTherapists,
  getAllThearapists,
  getThearpistById,
  getFeedbackById,
};

export default therapistService;
