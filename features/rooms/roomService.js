const rooms = [];
let roomId = 0;

export function getById(id) {
    return rooms.find(room => room.id === id);
}

export function createRoom(dane, playerId){
    const room = {
        id: ++roomId,
        code: codeGenerator(),
        name: dane.name,
        isPrivate: dane.isPrivate ?? false,
        maxPlayers: dane.maxPlayers ?? 8,
        status: "lobby",
        players: [{ playerId, joinedAt: new Date() }],
        hostId: playerId,
        createdAt: new Date()
    };

    rooms.push(room);

    return room;
}

export function getByCode(code){
    return rooms.find(room => room.code === code);
}

function codeGenerator(){
    const code = "ROOM" + roomId;

    return code;
}