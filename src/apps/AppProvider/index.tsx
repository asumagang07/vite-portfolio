import React from "react";
import AppProvider from "./AppProvider";
import AppView, { IAppViewProps } from "./AppView";

const AppComponent: React.FC<IAppViewProps> = (props) => {
  return (
    <AppProvider>
      <AppView>{props.children}</AppView>
    </AppProvider>
  );
};

export default AppComponent;
