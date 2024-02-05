/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, createContext, useState } from "react";
import { pages_data } from "./data/pages";

interface IProviderProps {
  children?: ReactNode;
  value?: any;
}

export interface ITabsProps {
  id?: string;
  name?: string;
  icon?: JSX.Element;
  children?: ReactNode;
}

export interface IContextProps {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
  tabs: ITabsProps[];
  setTabs: React.Dispatch<React.SetStateAction<ITabsProps[]>>;
}

export const AppContext = createContext<IContextProps>({
  theme: "light",
  setTheme: () => "light",
  tabs: [...pages_data],
  setTabs: () => [],
});

const AppProvider: React.FC<IProviderProps> = (props) => {
  const [theme, setTheme] = useState<any>("dark");
  const [tabs, setTabs] = useState<any>([]);

  return (
    <AppContext.Provider value={{ theme, setTheme, tabs, setTabs }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
