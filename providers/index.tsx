import { createContext, ReactNode, useContext, useState } from "react";
import Login from "../pages/login";

type ContextType = {
  loggedIn: boolean;
  images: string[];
  login: (b: boolean) => void;
  logout: () => void;
};

const defaultValue: ContextType = {
  loggedIn: false,
  images: [],
  login: (b: boolean) => {},
  logout: () => {},
};

const Context = createContext<ContextType>(defaultValue);

export function useAccount() {
  return useContext(Context);
}

export function AccountProvider(props: { children: ReactNode }) {
  const [state, setState] = useState<ContextType>(defaultValue);

  function login(b: boolean) {
    setState({ ...state, loggedIn: b });
  }

  function logout() {
    setState({ ...state, loggedIn: false });
  }

  function setImages(imgs: string[]) {
    setState({
      ...state,
      images: imgs.map((e) => ({ url: e.url, favourite: false })),
    });
  }

  return (
    <Context.Provider
      value={{
        ...state,
        login: login,
        logout: logout,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
