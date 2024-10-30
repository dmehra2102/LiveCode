"use client";
import React, { useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { useAppContext } from "@/contexts/AppContext";
import { languageList } from "@/constants/language-list";
import CodeEditorSkeleton from "@/components/CodeEditorSkeleton";
import { useSocketContext } from "@/contexts/SocketContext";
import { useRouter } from "next/navigation";

const CodeEditor = () => {
  const router = useRouter();
  const { socket } = useSocketContext();
  const { selectedLanguage, roomId } = useAppContext();
  useEffect(() => {
    if (!roomId) {
      router.push("/");
    }

    if (socket && roomId) {
      socket.emit("participantsList", roomId, response => {
        console.log("Participants List :", response.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);
  return (
    <div>
      <Editor
        height='100vh'
        language={selectedLanguage}
        value={languageList.find(item => item.value === selectedLanguage)?.defaultCode || "// write some code"}
        theme='vs-dark'
        loading={<CodeEditorSkeleton />}
        className='max-h-[calc(100vh-76px)] w-[98vw] overflow-hidden'
      />
    </div>
  );
};

export default CodeEditor;
