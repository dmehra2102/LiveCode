interface ServerToClientEvents {
  userJoined: (username: string) => void;
  roomUpdate: (room: string, users: string[]) => void;
  messageReceived: (message: { text: string; from: string }) => void;
  acceptJoinRequest: (room: string, username: string) => void;
  denyJoinRequest: (room: string, username: string) => void;
}

interface ClientToServerEvents {
  sendMessage: (message: string) => void;
  joinRoom: (room: string) => void;
  leaveRoom: (room: string) => void;
  editCodeAccess: (room: string, username: string) => void;
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