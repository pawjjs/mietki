import { Router } from "express";
import { body, param, query, validationResult } from "express-validator";
import { getRoom, createRoom } from "../controllers/roomsController.js";
import { handleValidationErrors } from "../middleware/handleValidationErrors.js";

const router = Router();

router.post(
    "/",
    [
        body("name").isString().trim().notEmpty(),
        body("isPrivate").optional().isBoolean().toBoolean(true),
        body("maxPlayers").optional().isInt({ min: 2, max: 16 }).toInt(),
        body("playerId").isInt().toInt()
    ],
    handleValidationErrors,
    createRoom
);

router.get(
    "/:id",
    [
        param("id").isInt()
    ],
    handleValidationErrors,
    getRoom
)

export default router;