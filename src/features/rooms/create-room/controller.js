import {createRoom} from './usecase.js';

export function createRoomController(req, res, next) {
    try {
        const room = createRoom(req.body);
        res.status(201).json(room);
    } catch (error) {
        next(error);
    }
}
