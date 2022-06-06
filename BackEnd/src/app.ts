// ENV Variables
require("dotenv").config();
import swaggerUi from "swagger-ui-express";
import express from "express";
import config from "config";
import cors from "cors";
// DB
import db from "../config/db";
import swaggerDocs from "./swagger.json";
// Routes
import router from "./router";

// Logger
import Logger from "../config/logger";

// Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

const port = config.get<number>("port");

const app = express();

// JSON Req and Res
app.use(express.json());
app.use(cors());
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// Morgan
app.use(morganMiddleware);

app.use("/api/", router);

app.listen(port, async () => {
  await db();

  Logger.info(`App rodando na porta: ${port}`);
});
