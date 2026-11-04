import {randomUUID} from 'node:crypto';
import {saveRoom} from '../repository.js';

export function createRoom(input) {
    const room = {
        id: randomUUID(),
        ownerId: null, // No authentication yet so its temporarily null
        name: input.name,
        maxPlayers: input.maxPlayers,
        mapId: null,
        players: [],
        createdAt: new Date().toISOString(),
        status: 'waiting',
    };

    return saveRoom(room);
}
