import { config } from "dotenv";
import { defineConfig } from "prisma/config";

config({ path: ".env.local", quiet: true });
config({ quiet: true });

function databaseUrl() {
  const value = process.env.DATABASE_URL ?? "mysql://user:password@localhost:3306/genuine_laptop";
  const url = new URL(value);
  if (process.env.DB_NAME) url.pathname = `/${process.env.DB_NAME}`;
  return url.toString();
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: databaseUrl(),
  },
});
