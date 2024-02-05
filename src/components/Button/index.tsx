import React from "react";
import cn from "classnames";

export interface TButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: React.FC<TButtonProps> = (props) => {
  const { className, label } = props;

  const buttonCls = cn(
    "flex items-center gap-2 text-sm rounded hover:bg-default-100 cursor-pointer",
    props.className
  );

  return <button className={cn(buttonCls, className)}>{label}</button>;
};

export default Button;
