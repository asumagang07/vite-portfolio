import { DiJavascript1, DiCss3, DiVisualstudio } from "react-icons/di";
import { ITabsProps } from "../AppProvider";

export const pages_data: ITabsProps[] = [
  {
    id: "getStarted",
    name: "Get Started",
    icon: <DiVisualstudio size={20} color={"#007acc"} />,
  },
  {
    id: "about",
    name: "About.css",
    icon: <DiCss3 size={20} color={"#0066b8"} />,
  },
  {
    id: "employment",
    name: "EmploymentHistory.js",
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
  },
  {
    id: "services",
    name: "Services.js",
    icon: <DiJavascript1 size={20} color="#f2eb00" />,
  },
];
