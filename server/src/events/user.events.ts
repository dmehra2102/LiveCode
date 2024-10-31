import { Server, Socket } from "socket.io";
import { roomService } from "@/services/room.service";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "@/interfaces/socket.interface";

type Args = {
  socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
  io: Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
};

class UserEventsListener {
  listen({ socket, io }: Args) {}
}

export const userEventsListener = new UserEventsListener();
