import React from "react";
import { ChevronsUp } from "lucide-react";
import CodeEditor from "@/components/CodeEditor";

const LiveRoom = () => {
  return (
    <div className="relative h-[calc(100vh-68px)] border overflow-hidden w-full">
      <CodeEditor />

      <div
        className="w-12 cursor-pointer absolute right-8 bottom-6 rounded-full flex items-center justify-center h-12"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgb(210, 36, 129) 0%, rgb(152, 75, 215) 90%)",
        }}
      >
        <ChevronsUp color="black" size={26} />
      </div>
    </div>
  );
};

export default LiveRoom;
