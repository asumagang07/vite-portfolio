import Editor, { EditorProps } from "@monaco-editor/react";
import React from "react";
import cn from "classnames";

interface TCodeEditorProps extends EditorProps {
  className?: string;
}

const CodeEditor: React.FC<TCodeEditorProps> = (props) => {
  const { className, ...rest } = props;
  return <Editor {...rest} className={cn("", className)} theme="vs-dark" />;
};

export default CodeEditor;
