import { Application } from "express";
import { RedisClientType } from "redis";

class App {
  app: Application;
  port: string | number;
  redisClient: RedisClientType;
}
