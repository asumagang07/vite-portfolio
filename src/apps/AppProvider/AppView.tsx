import React, { ReactNode } from "react";

export interface IAppViewProps {
  children?: ReactNode;
}

const AppView: React.FC<IAppViewProps> = (props) => {
  return <div>{props.children}</div>;
};

export default AppView;
