import { RoomEvent } from "@/enums/events.enum";

export interface RoomData {
  roomId: string;
  roomName: string;
  owner: string;
  participants: string[];
  createdAt: number;
}

export interface RoomEventPayloads {
  [RoomEvent.CreateRoom]: {
    roomName: string;
    ownerId: string;
  };

  [RoomEvent.DeleteRoom]: {
    roomId: string;
  };

  [RoomEvent.AddUser]: {
    roomId: string;
    userId: string;
    userName: string;
  };

  [RoomEvent.RemoveUser]: {
    roomId: string;
    userId: string;
  };

  [RoomEvent.LeaveRoom]: {
    roomId: string;
    userId: string;
  };

  [RoomEvent.JoinRoom]: {
    roomId: string;
    userName: string;
  };

  [RoomEvent.CodeEditAccess]: {
    roomId: string;
    userId: string;
  };

  [RoomEvent.CodeEditRevoked]: {
    roomId: string;
    userId: string;
  };
}
