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

enum TabsEnum {
  "get-started",
  "about",
  "employment",
  "services",
}

export interface IContextProps {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
  tabs: ITabsProps[];
  setTabs: React.Dispatch<React.SetStateAction<ITabsProps[]>>;
  sidebar_collapse: boolean;
  setSidebarCollapse: React.Dispatch<React.SetStateAction<boolean>>;
  activeTab?: keyof typeof TabsEnum;
  setActiveTab: React.Dispatch<
    React.SetStateAction<"get-started" | "about" | "employment" | "services">
  >;
}

export const AppContext = createContext<IContextProps>({
  theme: "light",
  setTheme: () => "light",
  tabs: [...pages_data],
  setTabs: () => [],
  sidebar_collapse: false,
  setSidebarCollapse: () => false,
  activeTab: "get-started",
  setActiveTab: () => "get-started",
});

const AppProvider: React.FC<IProviderProps> = (props) => {
  const [theme, setTheme] = useState<any>("dark");
  const [tabs, setTabs] = useState<any>([]);
  const [sidebar_collapse, setSidebarCollapse] = useState(false);
  const [activeTab, setActiveTab] =
    useState<keyof typeof TabsEnum>("get-started");

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        tabs,
        setTabs,
        setSidebarCollapse,
        sidebar_collapse,
        activeTab,
        setActiveTab,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
