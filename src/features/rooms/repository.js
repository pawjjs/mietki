import {rooms} from './data.js'; // Persistence is in memory for now

export function saveRoom(room) {
    rooms.push(room);
    return room;
}
