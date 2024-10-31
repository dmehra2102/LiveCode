"use client";

import { ProgrammingLanguage } from "@/constants/language-list";
import { RoomData } from "@/types/socket";
import { createContext, useContext, useState } from "react";

type AppContextType = {
  selectedLanguage: ProgrammingLanguage;
  roomId: string;
  setRoomId: (id: string) => void;
  setSelectedLanguage: (language: ProgrammingLanguage) => void;
  roomData: RoomData | null;
  setRoomData: (data: RoomData) => void;
};

const defaultContextValues: AppContextType = {
  selectedLanguage: ProgrammingLanguage.TYPESCRIPT,
  roomId: "",
  setRoomId: () => {},
  setSelectedLanguage: () => {},
  roomData: null,
  setRoomData: () => {},
};

const AppContext = createContext<AppContextType>(defaultContextValues);

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [roomId, setRoomId] = useState<string>("");
  const [roomData, setRoomData] = useState<RoomData | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage>(ProgrammingLanguage.TYPESCRIPT);

  const value = { selectedLanguage, roomId, setRoomId, setSelectedLanguage, roomData, setRoomData };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
