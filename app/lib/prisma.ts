import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log("✅ Prisma connected to MongoDB");
  } catch (error) {
    console.error("❌ Prisma connection error:", error);
  }
}

testConnection();

export default prisma;
