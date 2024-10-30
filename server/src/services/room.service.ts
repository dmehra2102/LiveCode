import { v4 as uuidv4 } from "uuid";
import { logger } from "@/utils/logger";
import { redis } from "./redis.service";
import { RoomData } from "@/interfaces/room-event-payload";

class RoomService {
  private readonly ROOM_PREFIX = "room:";
  private readonly ROOM_TTL = 24 * 60 * 60;

  async createRoom(roomName: string, ownerName: string): Promise<string | null> {
    try {
      const roomId = `${this.ROOM_PREFIX}${uuidv4()}`;
      const roomData: RoomData = {
        roomId,
        roomName,
        owner: ownerName,
        participants: [ownerName],
        createdAt: Date.now(),
      };

      await redis.redisClient.set(roomId, JSON.stringify(roomData), {
        EX: this.ROOM_TTL,
      });

      console.log("RoomData :", roomData);
      return roomId;
    } catch (error) {
      logger.error(`Error while creating room :`, error);
      return null;
    }
  }

  async getRoomData(roomId: string): Promise<RoomData | null> {
    const data = await redis.redisClient.get(roomId);
    return data ? JSON.parse(data) : null;
  }

  async addUserToRoom(roomId: string, username: string) {
    try {
      let roomData = await this.getRoomData(roomId);
      const ttl = await redis.redisClient.ttl(roomId);
      if (!roomData.participants.includes(username) && ttl !== -2) {
        roomData = {
          ...roomData,
          participants: [...roomData.participants, username],
        };

        await redis.redisClient.set(roomId, JSON.stringify(roomData), {
          EX: ttl,
        });

        return { success: true, message: "Participant added successfully." };
      }
    } catch (error) {
      logger.error(`Error while adding user from room :`, error);
    }
  }

  async removeUserFromRoom(roomId: string, username: string) {
    try {
      const roomData = await this.getRoomData(roomId);
      const ttl = await redis.redisClient.ttl(roomId);
      const updatedParticipant = roomData.participants.filter(participant => participant !== username);
      if (ttl === -2) return { success: false, message: "Room data has aleady expired." };

      await redis.redisClient.set(roomId, JSON.stringify(updatedParticipant), {
        EX: ttl,
      });

      return { success: true, message: "Participant removed successfully from the room." };
    } catch (error) {
      logger.error(`Error while removing user from room :`, error);
    }
  }
}

export const roomService = new RoomService();
