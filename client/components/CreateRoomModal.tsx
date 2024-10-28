"use client";

import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/contexts/AppContext";

type Props = {
  children: React.ReactNode;
};

interface RoomDataPayload {
  userName: string;
  roomName: string;
}

const CreateRoomModal = ({ children }: Props) => {
  const router = useRouter();
  const { setRoomId } = useAppContext();
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [roomData, setRoomData] = useState<RoomDataPayload>({
    userName: "",
    roomName: "",
  });

  const handleCreateRoom = () => {
    setRoomId("8376ksdcncx-wesdn");
    setOpen(false);
    router.push(`/live/8376ksdcncx-wesdn`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-heading bg-clip-text text-transparent bg-gradient-to-r from-primary to-black">
            Set Up Your Room
          </DialogTitle>
          <DialogDescription className="mt-3">
            Provide some details to personalize your room setup.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="userName" className="text-right">
              Your Name
            </Label>
            <Input
              id="userName"
              placeholder="Deepanshu Mehra"
              onChange={(e) =>
                setRoomData((prev) => ({ ...prev, userName: e.target.value }))
              }
              value={roomData.userName}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="roomName" className="text-right">
              Room Name
            </Label>
            <Input
              id="roomName"
              placeholder="bug-fix"
              onChange={(e) =>
                setRoomData((prev) => ({ ...prev, roomName: e.target.value }))
              }
              value={roomData.roomName}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleCreateRoom}
            disabled={
              isLoading ||
              !roomData.roomName ||
              !roomData.userName ||
              !!(roomData.roomName && roomData.roomName.length < 3) ||
              !!(roomData.userName && roomData.userName.length < 4)
            }
          >
            {isLoading && <LoaderCircle className="animate-spin h-4 w-4 " />}
            Create Room
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoomModal;
