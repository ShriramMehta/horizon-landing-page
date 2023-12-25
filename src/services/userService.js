import axios from "./axios";

const updateClientDetails = (userId, data) => {
  return axios.put(`/client/${userId}`, data);
};
const updateClientConcerns = (userId, data) => {
  console.log(data);
  return axios.put(`/client/concerns/${userId}`, data);
};
const addOnboardingData = (data) => {
  return axios.put(`/client/onboard`, data);
};
const createClient = (user) => {
  return axios.post(`/client/create`, user);
};
const bookAppointment = (data) => {
  return axios.post(`/appointments`, data);
};

const getUserData = (user) => {
  return axios.get(`/client/${user?.id}`);
};

const getAppointmentsByClientId = (userId) => {
  return axios.get(`/appointments/client/${userId}`);
};

const updateUserPassword = (data, user) => {
  return axios.put("/users/updatePassword", {
    ...data,
    email: user?.user?.email,
    userId: user?.user?.userId,
  });
};

const updateUserSecurityPin = (data, user) => {
  return axios.put("/users/changePinByUserId", {
    ...data,
    email: user?.user?.email,
    userId: user?.user?.userId,
  });
};

const getAuthStatus = (email) => {
  return axios.get(`/client/isAuthCompletedWebsite/${email}`);
};

const userService = {
  updateClientDetails,
  getUserData,
  updateUserPassword,
  updateUserSecurityPin,
  getAuthStatus,
  createClient,
  updateClientConcerns,
  addOnboardingData,
  bookAppointment,
  getAppointmentsByClientId,
};
export default userService;
