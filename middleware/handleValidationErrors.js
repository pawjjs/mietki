import { validationResult } from "express-validator";

export function handleValidationErrors(req, res, next) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    return res.status(400).json({
        error: {
            code: "VALIDATION_ERROR",
            message: "Invalid request data",
            details: errors.array()
        }
    });
}