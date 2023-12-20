import axios from "./axios";

const updateUserDetails = (user, data) => {
  return axios.put(`/users/edit/user/${user?.user?.userId}`, data);
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
  return axios.get(`/users/${user?.user?.userId}?email=${user?.user?.email}`);
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
  updateUserDetails,
  getUserData,
  updateUserPassword,
  updateUserSecurityPin,
  getAuthStatus,
  createClient,
  addOnboardingData,
  bookAppointment,
};
export default userService;
