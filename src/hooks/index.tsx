import { DiCss3, DiJavascript1, DiVisualstudio } from "react-icons/di";

export const getIcon = (name?: string) => {
  if (!name?.includes("."))
    return (
      <DiVisualstudio
        style={{ minWidth: 20, minHeight: 20 }}
        size={20}
        color={"#007acc"}
      />
    );
  const fileExt = name?.split(".").pop();

  switch (fileExt) {
    case "css":
      return (
        <DiCss3
          size={20}
          style={{ minWidth: 20, minHeight: 20 }}
          color={"#0066b8"}
        />
      );
    case "js":
      return (
        <DiJavascript1
          size={20}
          style={{ minWidth: 20, minHeight: 20 }}
          color="#f2eb00"
        />
      );
    default:
      return (
        <DiCss3
          size={20}
          style={{ minWidth: 20, minHeight: 20 }}
          color={"#0066b8"}
        />
      );
  }
};
