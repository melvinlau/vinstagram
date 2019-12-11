import { createContext } from "react";

const AuthContext = createContext({
  name: null,
  email: null,
});

export default AuthContext;
