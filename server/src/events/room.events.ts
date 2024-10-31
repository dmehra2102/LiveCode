import { Server, Socket } from "socket.io";
import { roomService } from "@/services/room.service";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "@/interfaces/socket.interface";

type Args = {
  socket: Socket<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
  io: Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
};

class RoomEventsListener {
  listen({ socket, io }: Args) {
    // Listening for creating a new room
    socket.on("createRoom", async (room, username, callback) => {
      const newRoom = await roomService.createRoom(room, username);
      if (!newRoom) {
        callback({ success: false, message: "Oops! Facing some issue while creating room for you. Please try after sometime." });
      }
      callback({ success: true, message: "Room created successfully.", data: newRoom });
    });

    // Listening for returing a participants list of a room
    socket.on("participantsList", async (roomId, callback) => {
      const participants = await roomService.getPaticipantsList(roomId);
      callback({ success: true, message: "ok", data: participants });
    });

    // Listening for sending a room permission request to room owner
    socket.on("roomPermission", async (roomId, userName, callback) => {
      const roomData = await roomService.getRoomData(roomId);
      // const
    });
  }
}

export const roomEventsListener = new RoomEventsListener();
