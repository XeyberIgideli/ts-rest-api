import express from "express";
import mongoose from "mongoose";
import { config } from "./config/config";
import Logger from "./lib/logger";
const app = express();
mongoose
    .connect(config.mongo.url)
    .then(() => {
    Logger.info("Connected to DB!");
})
    .catch((err) => Logger.error(err));
