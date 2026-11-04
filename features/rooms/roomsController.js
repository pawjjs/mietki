import * as roomService from "./roomService.js";

export function getRoom(req, res) {
    const id = Number(req.params.id);
    const room = roomService.getById(id);

    if (!room) {
        return res.status(404).json({
            error: {
            code: "ROOM_NOT_FOUND",
            message: "Room not found"
            }
        });
    }

    res.json(room);
}

export function createRoom(req, res){
    const name = req.body.name
    const isPrivate = req.body.isPrivate
    const maxPlayers = req.body.maxPlayers
    const playerId = req.body.playerId

    const room = roomService.createRoom({ name, isPrivate, maxPlayers }, playerId)

    return res.status(201).json(room);
}