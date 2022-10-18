import { createContext, ReactNode, useContext, useState } from "react";

type Image = {
  height: number;
  id: string;
  url: string;
  width: number;
  favourite?: boolean;
};

type ContextType = {
  loggedIn: boolean;
  images: Image[];
  login: (b: boolean) => void;
  logout: () => void;
  setImages: (y: Image[]) => void;
  username: string;
  setUsername: (name: string) => void;
};

const defaultValue: ContextType = {
  loggedIn: false,
  images: [],
  login: (b: boolean) => {},
  logout: () => {},
  setImages: ([]) => {},
  username: "",
  setUsername: (name: string) => {},
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

  function setImages(a: Image[]) {
    setState({ ...state, images: a });
  }

  function setUsername(name: string) {
    setState({ ...state, username: name });
  }
  return (
    <Context.Provider
      value={{
        ...state,
        login: login,
        logout: logout,
        setImages: setImages,
        setUsername: setUsername,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
