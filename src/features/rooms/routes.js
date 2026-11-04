import express from 'express';
import {createRoomController} from './create-room/controller.js';
import {createRoomSchema} from './create-room/schema.js';
import {validateBody} from '../../shared/middleware/validateBody.js';

const router = express.Router();

router.post('/', validateBody(createRoomSchema), createRoomController);

export default router;
