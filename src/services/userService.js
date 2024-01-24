import axios from "./axios";
//auth -open
const addOnboardingData = (data) => {
  return axios.put(`/client/onboard`, data);
};
const createClient = (user) => {
  return axios.post(`/client/create`, user);
};
const submitQuery = (data) => {
  return axios.post(`/client/submit-query`, data);
};
const getAuthStatus = (email) => {
  return axios.get(`/client/isAuthCompletedWebsite/${email}`);
};
const checkCouponCode = (code) => {
  return axios.get(`/coupons/validate-coupon/${code}`);
};
//private
const updateClientDetails = (userId, data) => {
  return axios.put(`/client/update/${userId}`, data);
};
const updateClientConcerns = (userId, data) => {
  console.log(data);
  return axios.put(`/client/update-concerns/${userId}`, data);
};

const getUserData = (user) => {
  return axios.get(`/client/client/${user?.id}`);
};

const getAppointmentsByClientId = (userId) => {
  return axios.get(`/appointments/client-appointments/${userId}`);
};

//removed due to webhook
const bookAppointment = (data) => {
  return axios.post(`/appointments`, data);
};

const userService = {
  updateClientDetails,
  getUserData,
  getAuthStatus,
  createClient,
  updateClientConcerns,
  addOnboardingData,
  bookAppointment,
  getAppointmentsByClientId,
  checkCouponCode,
  submitQuery,
};
export default userService;
