import { Enable, ResizableProps } from "re-resizable";
import React, { ReactNode } from "react";
import { Resizable } from "re-resizable";
import cn from "classnames";

interface IResizableBoxProps extends Omit<ResizableProps, "enable"> {
  className?: string;
  children?: ReactNode;
  handle?: Enable | false;
}

const ResizableBox: React.FC<IResizableBoxProps> = (props) => {
  const {
    className,
    children,
    minWidth = 100,
    minHeight = 100,
    maxWidth,
    defaultSize = {
      width: "auto",
      height: "auto",
    },
    handle = {
      top: false,
      right: true,
      bottom: false,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false,
    },
  } = props;
  return (
    <Resizable
      className={(cn("relative"), className)}
      defaultSize={defaultSize}
      enable={handle}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      handleClasses={{
        right: `flex justify-center after:content-[''] after:absolute after:top-0 after:right-0 after:block after:w-2 after:h-full  after:hover:bg-blue-500 after:active:bg-blue-500`,
      }}
    >
      {children}
    </Resizable>
  );
};

export default ResizableBox;
