import React, { ReactNode } from "react";

export interface TMainDivProps {
  children?: ReactNode;
}

const MainDiv: React.FC<TMainDivProps> = (props) => {
  return (
    <div
      className="maindiv relative flex flex-row "
      style={{
        height: `calc(100vh - 96px)`,
        maxHeight: `calc(100vh - 96px)`,
      }}
    >
      {props.children}
    </div>
  );
};

export default MainDiv;
