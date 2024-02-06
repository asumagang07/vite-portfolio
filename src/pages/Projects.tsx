import React from "react";
import { CodeEditor } from "../components";
import { sampleHtml } from "../apps/AppProvider/data/EmploymentHistoryData";

const Projects: React.FC = () => {
  return (
    <div className="flex w-full">
      <CodeEditor
        height="84vh"
        width={"100%"}
        path={"./pages.html"}
        defaultLanguage={"html"}
        defaultValue={sampleHtml}
      />
    </div>
  );
};

export default Projects;
