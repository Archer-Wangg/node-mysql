import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = async (input) => {
    const res = await axios.post("http://localhost:8800/login", input, {
      withCredentials: true,
    });
    setCurrentUser(res.data);
    console.log(res.data);
  };

  const logout = async () => {
    await axios.post("http://localhost:8800/logout",  {withCredentials: true});
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
