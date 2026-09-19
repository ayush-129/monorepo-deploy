import "dotenv/config";

console.log(
  ">>> DATABASE_URL =",
  process.env.DATABASE_URL
    ? new URL(process.env.DATABASE_URL).hostname
    : "NOT LOADED"
);

import { PrismaClient } from "./generated/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const client = new PrismaClient({ adapter });