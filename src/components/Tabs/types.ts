import { ReactNode } from "react";

export interface TTabsProps {
  className?: string;
  items?: TabItemProps[];
  defaultActiveTab?: number;
  variant?: "flat" | "compact";
  closable?: boolean;
  draggable?: boolean;
}

export interface TabItemProps {
  id?: number;
  label?: string;
  icon?: string | JSX.Element;
  children?: ReactNode;
  disabled?: boolean;
}
