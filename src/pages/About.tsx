import React from "react";
import { CodeEditor } from "../components";
import { someCSSCodeExample } from "../apps/AppProvider/data/EmploymentHistoryData";

const About = () => {
  return (
    <div className="flex w-full">
      <CodeEditor
        height="80vh"
        width={"100%"}
        path={"./pages.tsx"}
        defaultLanguage={"css"}
        defaultValue={someCSSCodeExample}
      />
    </div>
  );
};

export default About;
