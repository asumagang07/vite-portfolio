import React from "react";
import { CodeEditor } from "../components";
import { emp_data } from "../apps/AppProvider/data/EmploymentHistoryData";

const EmploymentHistory: React.FC = () => {
  return (
    <div className="flex w-full">
      <CodeEditor
        height="84vh"
        width={"100%"}
        path={"./pages.tsx"}
        defaultLanguage={"javascript"}
        defaultValue={emp_data}
      />
    </div>
  );
};

export default EmploymentHistory;
