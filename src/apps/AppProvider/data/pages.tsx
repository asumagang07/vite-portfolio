import { ITabsProps } from "../AppProvider";
import { About, EmploymentHistory, Projects, Services } from "../../../pages";

export const pages_data: ITabsProps[] = [
  {
    id: "getStarted",
    name: "Get Started",
    children: <About />,
  },
  {
    id: "about",
    name: "About.css",
    children: <Projects />,
  },
  {
    id: "employment",
    name: "Employment History.js",
    children: <EmploymentHistory />,
  },
  {
    id: "services",
    name: "Services.js",
    children: <Services />,
  },
];
