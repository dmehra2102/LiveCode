import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}.local` });

export const { REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } = process.env;
