"use client";
import React from "react";
import { Editor } from "@monaco-editor/react";
import CodeEditorSkeleton from "@/components/CodeEditorSkeleton";

const CodeEditor = () => {
  return (
    <div>
      <Editor
        height="100vh"
        defaultLanguage="typescript"
        defaultValue="// some comment"
        theme="vs-dark"
        loading={<CodeEditorSkeleton />}
        className="h-[calc(100vh-66px)] w-[98vw] overflow-hidden"
      />
    </div>
  );
};

export default CodeEditor;
