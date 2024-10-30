import { RoomEvent } from "@/enums/events.enum";
import { RoomEventPayloads } from "@/interfaces/room-event-payload";

class RoomController {
  emitRoomEvent<T extends RoomEvent>(event: T, payload: RoomEventPayloads[T]): void {
    // Implementation
  }

  onRoomEvent<T extends RoomEvent>(event: T, callback: (payload: RoomEventPayloads[T]) => void): void {
    // Implementation
  }
}
