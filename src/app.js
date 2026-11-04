import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';
import { readFileSync } from 'node:fs';
import roomsRouter from './features/rooms/routes.js';
import { errorHandler } from './shared/middleware/errorHandler.js';

const app = express();
const openApiDocument = YAML.parse(
  readFileSync(new URL('./config/openapi.yaml', import.meta.url), 'utf8'),
);

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
app.use('/api/rooms', roomsRouter);
app.use(errorHandler);

export default app;
