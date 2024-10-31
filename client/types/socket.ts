export interface SocketResponseInterface {
  success: boolean;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any | null;
}

export type ClientSideParticipantList = {
  userName: string;
  storedName: string;
};

export interface RoomData {
  roomId: string;
  roomName: string;
  owner: string;
  participants: string[];
  createdAt: number;
}

export interface ServerToClientEvents {
  userJoined: (username: string) => void;
  roomUpdate: (room: string, users: string[]) => void;
  messageReceived: (message: { text: string; from: string }) => void;
  acceptJoinRequest: (room: string, username: string) => void;
  denyJoinRequest: (room: string, username: string) => void;
  uniqueName: (name: string) => void;
}

export interface ClientToServerEvents {
  sendMessage: (message: string) => void;
  joinRoom: (room: string) => void;
  leaveRoom: (room: string) => void;
  editCodeAccess: (room: string, username: string) => void;
  createRoom: (room: string, username: string, callback: (data: SocketResponseInterface) => void) => void;
  participantsList: (roomId: string, callback: (data: SocketResponseInterface) => void) => void;
}
