import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const connectionString = process.env.DATABASE_URL ?? "mysql://user:password@localhost:3306/genuine_laptop";
const databaseUrl = new URL(connectionString);
if (process.env.DB_NAME) databaseUrl.pathname = `/${process.env.DB_NAME}`;

const sslRequired = databaseUrl.searchParams.get("ssl-mode")?.toLowerCase() === "required";
const rejectUnauthorized = process.env.DB_SSL_REJECT_UNAUTHORIZED !== "false";

const adapter = new PrismaMariaDb({
  host: databaseUrl.hostname,
  port: Number(databaseUrl.port || 3306),
  user: decodeURIComponent(databaseUrl.username),
  password: decodeURIComponent(databaseUrl.password),
  database: databaseUrl.pathname.replace(/^\//, ""),
  ssl: sslRequired ? { rejectUnauthorized } : undefined,
  connectionLimit: 5,
});

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
