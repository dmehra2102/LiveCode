"use client";

import { Button } from "./ui/button";
import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAppContext } from "@/contexts/AppContext";
import { useSocketContext } from "@/contexts/SocketContext";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type Props = {
  children: React.ReactNode;
};

interface RoomDataPayload {
  userName: string;
  roomId: string;
}

const JoinRoomModal = ({ children }: Props) => {
  const { setRoomId } = useAppContext();
  const { socket } = useSocketContext();
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [roomData, setRoomData] = useState<RoomDataPayload>({
    userName: "",
    roomId: "",
  });

  const handleJoinRoom = () => {
    setIsLoading(true);
    if (socket) {
      //   socket.emit("createRoom", convertSpacesToHyphens(roomData.roomName), convertSpacesToHyphens(roomData.userName), response => {
      //     setIsLoading(false);
      //     if (response.data) {
      //       setRoomId(response.data);
      //       router.push(`/live/${response.data}`);
      //     }
      //   });
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle className='font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-black'>
            Join a Room
          </DialogTitle>
          <DialogDescription className='mt-3'>Provide some details inorder to join room.</DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='userName' className='text-right'>
              Your Name
            </Label>
            <Input
              id='userName'
              placeholder='Deepanshu Mehra'
              onChange={e => setRoomData(prev => ({ ...prev, userName: e.target.value }))}
              value={roomData.userName}
              className='col-span-3'
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='roomName' className='text-right'>
              Room Id
            </Label>
            <Input
              id='roomName'
              placeholder='room:bug-fix-8765789ld73gd'
              onChange={e => setRoomData(prev => ({ ...prev, roomName: e.target.value }))}
              value={roomData.roomId}
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleJoinRoom}
            disabled={
              isLoading ||
              !roomData.roomId ||
              !roomData.userName ||
              !!(roomData.roomId && roomData.roomId.length < 8) ||
              !!(roomData.userName && roomData.userName.length < 4)
            }
          >
            {isLoading && <LoaderCircle className='animate-spin h-4 w-4 ' />}
            Join Room
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default JoinRoomModal;
