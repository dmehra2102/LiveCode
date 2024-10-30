export enum RoomEvent {
  /**
   * Emitted when a new room is created
   * Payload: { roomId: string, ownerId: string, roomName: string }
   * @example socket.emit(RoomEvent.CreateRoom, { roomName: "JavaScript Workshop" })
   */
  CreateRoom = "room:create",

  /**
   * Emitted when a room is deleted by the owner
   * Payload: { roomId: string }
   * @example socket.emit(RoomEvent.DeleteRoom, { roomId: "123" })
   */
  DeleteRoom = "room:delete",

  /**
   * Emitted when a user is added to the room (after join request is accepted)
   * Payload: { roomId: string, userId: string, userName: string }
   * @example socket.emit(RoomEvent.AddUser, { roomId: "123", userId: "456", userName: "John" })
   */
  AddUser = "room:add-user",

  /**
   * Emitted when a user is removed from the room by the owner
   * Payload: { roomId: string, userId: string }
   * @example socket.emit(RoomEvent.RemoveUser, { roomId: "123", userId: "456" })
   */
  RemoveUser = "room:remove-user",

  /**
   * Emitted when a user voluntarily leaves the room
   * Payload: { roomId: string, userId: string }
   * @example socket.emit(RoomEvent.LeaveRoom, { roomId: "123", userId: "456" })
   */
  LeaveRoom = "room:leave",

  /**
   * Emitted when a user requests to join a room
   * Payload: { roomId: string, userId: string, userName: string }
   * @example socket.emit(RoomEvent.JoinRoom, { roomId: "123", userName: "John" })
   */
  JoinRoom = "room:join",

  /**
   * Emitted when a user is granted code editing permissions
   * Payload: { roomId: string, userId: string }
   * @example socket.emit(RoomEvent.CodeEditAccess, { roomId: "123", userId: "456" })
   */
  CodeEditAccess = "room:code-edit-access",

  /**
   * Emitted when a user's code editing permissions are revoked
   * Payload: { roomId: string, userId: string }
   * @example socket.emit(RoomEvent.CodeEditRevoked, { roomId: "123", userId: "456" })
   */
  CodeEditRevoked = "room:code-edit-revoked",
}
