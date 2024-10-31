"use client";

import { io, Socket } from "socket.io-client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ClientToServerEvents, ServerToClientEvents } from "@/types/socket";
import { useAppContext } from "./AppContext";

interface SocketContextValue {
  socket: Socket<ServerToClientEvents, ClientToServerEvents> | null;
}

export const SocketContext = createContext<SocketContextValue>({
  socket: null,
});

// Custom hook to use the context
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUserStoredName } = useAppContext();
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null);

  useEffect(() => {
    const newSocket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:8080", {
      path: "/livecode.io/",
      auth: {
        token: "your-auth-token",
      },
    });

    newSocket.on("connect", () => {
      console.log("Connected to the server");
    });

    newSocket.on("uniqueName", (uniqueName: string) => {
      if (uniqueName) {
        setUserStoredName(uniqueName);
      }
    });

    newSocket.on("connect_error", (error: Error) => {
      console.log("Connection error : ", error.message);
    });

    newSocket.on("disconnect", (reason: string) => {
      console.log("Disconnected from the server:", reason);
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};
