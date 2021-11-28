import { PrismaClient } from '@prisma/client'

const connectionDB = new PrismaClient();

export { connectionDB };