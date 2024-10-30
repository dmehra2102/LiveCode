import helmet from "helmet";
import { SocketIo } from "./socket";
import compression from "compression";
import { logger } from "@/utils/logger";
import { createServer, Server } from "http";
import express, { Application } from "express";
import { redis } from "./services/redis.service";

class App {
  env: string;
  app: Application;
  httpServer: Server;
  port: string | number;

  constructor() {
    this.app = express();
    this.env = process.env.NODE_ENV || "development";
    this.port = process.env.PORT || 8080;
    this.httpServer = createServer(this.app);
    this.initializeMiddleware();
  }

  private initializeMiddleware() {
    this.app.use(helmet());
    this.app.use(compression());
  }

  async listen() {
    try {
      const redisClient = await redis.connect();
      const io = new SocketIo(this.httpServer);
      this.httpServer.listen(this.port, () => {
        logger.info(`=================================`);
        logger.info(`======= ENV: ${this.env} =======`);
        logger.info(`🚀 🚀 Server listening on port ${this.port}! 🚀 🚀`);
        logger.info(`=================================`);
      });

      // Handle graceful shutdown
      const shutdown = async () => {
        logger.info("Gracefully shutting down...");

        io.shutdown();

        if (redisClient) {
          await redisClient.disconnect();
          logger.info("Redis client disconnected.");
        }

        this.httpServer.close(err => {
          if (err) {
            logger.error("Error closing HTTP server:", err);
            process.exit(1);
          } else {
            logger.info("HTTP server closed.");
          }
        });

        process.exit(0);
      };

      process.on("SIGINT", shutdown);
      process.on("SIGTERM", shutdown);
    } catch (error) {
      logger.error(`Error starting server: ${error}`);
    }
  }
}

export { App };
