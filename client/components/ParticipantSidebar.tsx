import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useAppContext } from "@/contexts/AppContext";
import { ClientSideParticipantList } from "@/types/socket";
import { structureParticipantList } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ParticipantSidebar = () => {
  const { toast } = useToast();
  const { roomData } = useAppContext();
  const [participantList, setParticipantList] = useState<ClientSideParticipantList[] | null>(null);

  useEffect(() => {
    if (roomData && roomData.participants.length) {
      const structuredList = structureParticipantList(roomData.participants);
      setParticipantList(structuredList);
    }
  }, [roomData]);
  return (
    <div className='shadow-lg rounded-lg px-3 py-4 m-2 border-2 max-w-full border-violet-950 min-h-[calc(100vh-90px)]'>
      <div className='flex gap-3 items-center border-b pb-4'>
        <p className='font-heading text-[22px] bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground to-gray-400'>
          Participants
        </p>
        <p className='max-w-max rounded-md flex items-center justify-center border border-violet-800 text-[17px] font-heading bg-gray-600 px-[6px] py-[1px]'>
          12
        </p>
      </div>

      {/* Participants List */}
      <div className='flex flex-col gap-4 mt-4'>
        {participantList &&
          participantList.length &&
          participantList.map((participant, index) => {
            return (
              <div
                key={`${index}-${participant}`}
                className='bg-gradient-to-l overflow-hidden from-primary to-purple-950 flex gap-2 items-center justify-between border rounded-[28px] shadow-xl px-3 py-1'
              >
                <p className='text-[16px] truncate max-w-[200px] bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground to-gray-300'>
                  {participant.userName}
                  <span className='text-[10px] pl-1 font-heading'>(owner)</span>
                </p>
                <Button
                  variant={"destructive"}
                  size={"sm"}
                  onClick={() => {
                    toast({
                      title: "Particpant Removed",
                      description: `Particpant with name ${participant.storedName} has been removed`,
                    });
                  }}
                >
                  Remove
                </Button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ParticipantSidebar;
