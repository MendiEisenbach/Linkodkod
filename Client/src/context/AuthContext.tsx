import { createContext, useState, type PropsWithChildren } from "react";
import { setAuthToken } from "../services/postsService";

export type AuthContextType = {
  username: string;
  token: string;
  setUsername: (name: string) => void;
  setToken: (token: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  username: "",
  token: "",
  setUsername: () => {},
  setToken: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [username, setUsername] = useState("");
  const [token, setTokenState] = useState("");

  function setToken(tokenValue: string) {
    setTokenState(tokenValue);
    setAuthToken(tokenValue); 
  }

  return (
    <AuthContext.Provider value={{ username, token, setUsername, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
