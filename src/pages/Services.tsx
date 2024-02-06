import React from "react";
import { CodeEditor } from "../components";
import { sampleJs } from "../apps/AppProvider/data/EmploymentHistoryData";

const Services: React.FC = () => {
  return (
    <div className="flex w-full">
      <CodeEditor
        height="84vh"
        width={"100%"}
        path={"./pages.js"}
        defaultLanguage={"javascript"}
        defaultValue={sampleJs}
      />
    </div>
  );
};

export default Services;
