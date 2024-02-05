import { ITabsProps } from "../AppProvider";
import EmploymentHistory from "../../../pages/EmploymentHistory";
import About from "../../../pages/About";

export const pages_data: ITabsProps[] = [
  {
    id: "getStarted",
    name: "Get Started",
    children: <About />,
  },
  {
    id: "about",
    name: "About.css",
    children: "about",
  },
  {
    id: "employment",
    name: "Employment History.js",
    children: <EmploymentHistory />,
  },
  {
    id: "services",
    name: "Services.js",
    children: "services",
  },
];
