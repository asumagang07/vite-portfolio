import React, { ReactNode, createContext, useState } from "react";

interface IProviderProps {
  children?: ReactNode;
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
  const [theme, setTheme] = useState<IContextProps["theme"]>("dark");
  const [tabs, setTabs] = useState<IContextProps["tabs"]>([]);

  return (
    <AppContext.Provider value={{ theme, setTheme, tabs, setTabs }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
