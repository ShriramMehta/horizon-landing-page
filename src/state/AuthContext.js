import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const user = JSON.parse(localStorage.getItem("adapt_client")) || null;

  const [state, setState] = useState({
    user,
  });

  const handleStateChange = (name, value) =>
    setState((prev) => ({ ...prev, [name]: value }));

  const updateUser = (data) => {
    handleStateChange("user", data);
    localStorage.setItem("adapt_client", JSON.stringify(data));
  };

  const logOutUser = () => {
    localStorage.removeItem("adapt_client");
    handleStateChange("user", null);
  };

  const updateUserDetails = (data) => {
    handleStateChange("user", { user: data, token: state.user.token });
    localStorage.setItem(
      "adapt_client",
      JSON.stringify({ user: data, token: state.user.token })
    );
  };

  return (
    <AuthContext.Provider
      value={{ ...state, updateUser, logOutUser, updateUserDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
}
