import axios from "./axios";

const updateUserDetails = (user, data) => {
  return axios.put(`/users/edit/user/${user?.user?.userId}`, data);
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

const userService = {
  updateUserDetails,
  getUserData,
  updateUserPassword,
  updateUserSecurityPin,
};
export default userService;
