/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode, createContext, useState } from "react";

interface IProviderProps {
  children?: ReactNode;
  value?: any;
}

interface ITabsProps {
  name?: string;
  icon?: JSX.Element;
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
  tabs: [{}],
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
