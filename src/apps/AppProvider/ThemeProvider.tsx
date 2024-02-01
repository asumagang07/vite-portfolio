import React from "react";
import { styles as defaultTheme } from "./styles";

export interface ThemeContextInterface<T> {
  theme: T;
}

export const ThemeContext = React.createContext<
  ThemeContextInterface<typeof defaultTheme>
>({
  theme: defaultTheme,
});

export interface ThemeProviderProps {
  children: React.ReactNode;
  value: ThemeContextInterface<typeof defaultTheme>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  value,
}) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
