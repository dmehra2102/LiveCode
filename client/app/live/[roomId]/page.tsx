"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import CodeEditor from "@/components/CodeEditor";
import { useAppContext } from "@/contexts/AppContext";
import { useSocketContext } from "@/contexts/SocketContext";
import ParticipantSidebar from "@/components/ParticipantSidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const LiveRoom = () => {
  const router = useRouter();
  const { socket } = useSocketContext();
  const { roomId, setRoomData } = useAppContext();

  useEffect(() => {
    if (!roomId) router.push("/");

    if (socket && roomId) {
      socket.emit("participantsList", roomId, response => {
        setRoomData(response.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  return (
    <div className='relative h-[calc(100vh-68px)] overflow-hidden w-full'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={80}>
          <CodeEditor />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={20} maxSize={25}>
          <ParticipantSidebar />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default LiveRoom;
