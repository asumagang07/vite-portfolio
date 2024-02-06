import React from "react";
import { CodeEditor } from "../components";
import { someCSSCodeExample } from "../apps/AppProvider/data/EmploymentHistoryData";

const About: React.FC = () => {
  return (
    <div className="flex w-full">
      <CodeEditor
        height="84vh"
        width={"100%"}
        path={"./pages.tsx"}
        defaultLanguage={"css"}
        defaultValue={someCSSCodeExample}
      />
    </div>
  );
};

export default About;
