import {z} from 'zod';

export const createRoomSchema = z.object({
    name: z.string().trim().min(1).max(80),
    maxPlayers: z.int().min(2).max(16).default(8),
});
