const { PrismaClient } = require('@prisma/client');

const connectionDB = new PrismaClient();

module.exports = { connectionDB };