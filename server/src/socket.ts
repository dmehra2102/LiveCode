import { Server } from "http";
import { logger } from "@/utils/logger";
import { Server as IoServer, ServerOptions } from "socket.io";
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from "@/interfaces/socket.interface";
import { roomService } from "./services/room.service";

class SocketIo {
  private serverOptions: Partial<ServerOptions>;
  private _io: IoServer<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;

  constructor(httpServer: Server) {
    try {
      this.initializeInstance(httpServer);
      this.initializeErrorHandling();
      this.initializeMiddleware();
      this.registerEventHandlers();
      logger.info("Socket.IO server initialized successfully");
    } catch (error) {
      logger.error("Failed to initialize Socket.IO server:", error);
      throw new Error("Socket.IO initialization failed");
    }
  }

  private initializeInstance(httpServer: Server) {
    this.serverOptions = {
      cleanupEmptyChildNamespaces: true,
      path: "/livecode.io/",
      cors: {
        origin: ["http://localhost:3000"],
        credentials: true,
      },
    };

    this._io = new IoServer<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, this.serverOptions);
  }

  get io() {
    if (!this._io) {
      throw new Error("Socket.IO has not been initialized. Call initializeSocket() first.");
    }
    return this._io;
  }

  private registerEventHandlers() {
    this._io.on("connection", socket => {
      logger.info(`Client with id ${socket.id} has connected`);

      socket.on("createRoom", async (room, username, callback) => {
        const newRoom = await roomService.createRoom(room, username);
        if (!newRoom) {
          callback({ success: false, message: "Oops! Facing some issue while creating room for you. Please try after sometime." });
        }

        callback({ success: true, message: "Room created successfully.", data: newRoom });
      });
    });
  }

  private initializeMiddleware(): void {
    this.io.use(async (socket, next) => {
      try {
        const token = socket.handshake.auth.token || socket.handshake.headers.authorization;
        if (!token) {
          throw new Error("Authentication failed - No token provided");
        }

        // Verify token and attach user data to socket
        // const user = await verifyToken(token);
        // socket.data.user = user;

        next();
      } catch (error) {
        logger.error("Socket middleware error:", error);
        next(new Error("Authentication error"));
      }
    });
  }

  private initializeErrorHandling(): void {
    this.io.engine.on("connection_error", err => {
      logger.error("Connection error:", err);
    });

    this.io.on("connect_error", err => {
      logger.error("Client connection error:", err);
    });
  }

  public shutdown(): void {
    this.io.close(() => {
      logger.info("Socket.IO server closed");
    });
  }
}

export { SocketIo };
