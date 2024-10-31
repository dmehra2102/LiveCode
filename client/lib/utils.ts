import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { ClientSideParticipantList } from "@/types/socket";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertSpacesToHyphens(input: string): string {
  return input.replace(/\s+/g, "-");
}

export function convertHyphensToSpaces(input: string): string {
  return input.replace(/-+/g, " ");
}

export function structureParticipantList(participantList: string[]): ClientSideParticipantList[] {
  const newParticipantList: ClientSideParticipantList[] = participantList
    .filter(participant => participant.length)
    .map(participant => {
      const particpantName = participant.split("-");
      return { userName: particpantName[0], storedName: participant };
    });

  return newParticipantList;
}
