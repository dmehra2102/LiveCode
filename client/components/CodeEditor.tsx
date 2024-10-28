"use client";
import React from "react";
import { Editor } from "@monaco-editor/react";
import CodeEditorSkeleton from "@/components/CodeEditorSkeleton";
import { useAppContext } from "@/contexts/AppContext";
import { languageList } from "@/constants/language-list";

const CodeEditor = () => {
  const { selectedLanguage } = useAppContext();
  return (
    <div>
      <Editor
        height="100vh"
        language={selectedLanguage}
        value={
          languageList.find((item) => item.value === selectedLanguage)
            ?.defaultCode || "// write some code"
        }
        theme="vs-dark"
        loading={<CodeEditorSkeleton />}
        className="max-h-[calc(100vh-76px)] w-[98vw] overflow-hidden"
      />
    </div>
  );
};

export default CodeEditor;
