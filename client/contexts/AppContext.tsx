"use client";

import { ProgrammingLanguage } from "@/constants/language-list";
import { RoomData } from "@/types/socket";
import { createContext, useContext, useState } from "react";

type AppContextType = {
  roomId: string;
  roomData: RoomData | null;
  userStoredName: string | null;
  setRoomId: (id: string) => void;
  selectedLanguage: ProgrammingLanguage;
  setRoomData: (data: RoomData) => void;
  setUserStoredName: (name: string) => void;
  setSelectedLanguage: (language: ProgrammingLanguage) => void;
};

const defaultContextValues: AppContextType = {
  roomId: "",
  roomData: null,
  setRoomId: () => {},
  userStoredName: null,
  setRoomData: () => {},
  setUserStoredName: () => {},
  setSelectedLanguage: () => {},
  selectedLanguage: ProgrammingLanguage.TYPESCRIPT,
};

const AppContext = createContext<AppContextType>(defaultContextValues);

export const useAppContext = () => {
  return useContext(AppContext);
};

interface Props {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [roomId, setRoomId] = useState<string>("");
  const [roomData, setRoomData] = useState<RoomData | null>(null);
  const [userStoredName, setUserStoredName] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<ProgrammingLanguage>(ProgrammingLanguage.TYPESCRIPT);

  const value = { selectedLanguage, roomId, setRoomId, setSelectedLanguage, roomData, setRoomData, userStoredName, setUserStoredName };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
