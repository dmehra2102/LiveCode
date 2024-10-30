import { logger } from "@/utils/logger";
import { createClient, RedisClientType } from "redis";
import { REDIS_HOST, REDIS_PASSWORD, REDIS_PORT } from "@/configs/env.config";

class RedisServer {
  private _redisClient: RedisClientType;
  get redisClient(): RedisClientType {
    if (!this._redisClient) {
      throw new Error("Please initialize the redis client first.");
    }
    return this._redisClient;
  }

  async connect(retryAttempts = 5, retryDelay = 2000) {
    this._redisClient = createClient({
      password: REDIS_PASSWORD,
      socket: {
        host: REDIS_HOST,
        port: Number(REDIS_PORT),
        reconnectStrategy: retries => {
          if (retries > retryAttempts) {
            logger.error("Max retries reached for Redis connection.");
            return new Error("Could not connect to Redis");
          }
          logger.warn(`Retrying Redis connection: attempt ${retries + 1}`);
          return retryDelay;
        },
      },
    });

    this._redisClient.on("connect", () => {
      logger.info("Connected to Redis");
    });
    this._redisClient.on("error", err => {
      logger.error(`Redis connection error :`, err);
    });

    return this._redisClient.connect();
  }
}

export const redis = new RedisServer();
