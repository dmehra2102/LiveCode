interface SocketResponseInterface {
  success: boolean;
  message: string;
  data?: any | null;
}

interface ServerToClientEvents {
  userJoined: (username: string) => void;
  roomUpdate: (room: string, users: string[]) => void;
  messageReceived: (message: { text: string; from: string }) => void;
  acceptJoinRequest: (room: string, username: string) => void;
  denyJoinRequest: (room: string, username: string) => void;
}

interface ClientToServerEvents {
  sendMessage: (message: string) => void;
  leaveRoom: (roomId: string, userName: string) => void;
  editCodeAccess: (room: string, username: string) => void;
  createRoom: (room: string, username: string, callback: (data: SocketResponseInterface) => void) => void;
  participantsList: (roomId: string, callback: (data: SocketResponseInterface) => void) => void;
  roomPermission: (roomId: string, username: string, callback: (data: SocketResponseInterface) => void) => void;
}

interface InterServerEvents {
  connect_error: (err: Error) => void;
  userDisconnected: (userId: string) => void;
}

interface SocketData {
  userId: string;
  username: string;
  rooms: string[];
}

export { ServerToClientEvents, ClientToServerEvents, InterServerEvents, SocketData };
