import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yaml";
import { readFileSync } from "node:fs";
import roomsRouter from "./routes/rooms.js";
const app = express();
app.use(express.json());
// Wczytanie specyfikacji OpenAPI
const spec = YAML.parse(
    readFileSync(new URL("./openapi.yaml", import.meta.url), "utf8")
);
// Udostępnienie dokumentacji
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(spec));
// Endpointy API
app.use("/api/rooms", roomsRouter);
app.listen(3000);