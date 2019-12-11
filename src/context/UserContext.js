import { createContext } from "react";

export const initialUserState = {
  name: null,
  email: null,
}

export const UserContext = createContext(initialUserState);
