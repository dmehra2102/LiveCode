import { RoomData } from "@/interfaces/room-event-payload";
import { logger } from "@/utils/logger";

class RoomService {
  private readonly ROOM_PREFIX = "room:";
  private readonly ROOM_TTL = 24 * 60 * 60;
  async createRoom(roomName: string, ownerName: string): Promise<string> {
    try {
      const roomId = `${this.ROOM_PREFIX}${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
      const roomData: RoomData = {
        roomId,
        roomName,
        owner: ownerName,
        participants: [ownerName],
        createdAt: Date.now(),
      };

      // Todo : Have to store this info in redis
      return roomId;
    } catch (error) {
      logger.error(`Error while creating room :`, error);
    }
  }
}
