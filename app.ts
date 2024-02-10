import express, { urlencoded } from "express"
import mongoose from "mongoose"
import { config } from "./config/config"
import Logger from "./lib/logger"
const app = express()

mongoose
  .connect(config.mongo.url)
  .then(() => {
    Logger.info("Connected to DB!")
    StartServer()
  })
  .catch((err) => Logger.error(err))

const StartServer = () => {
  app.use((req,res,next) => {
    Logger.info(`Incoming -> Method: ${req.method} - Url: ${req.url} - IP: ${req.socket.remoteAddress}`)

    res.on('finish', () => {
      Logger.info(`Incoming -> Method: ${req.method} - Url: ${req.url} - IP: ${req.socket.remoteAddress} - Status: ${req.statusCode}`)
    })

    next()
  })

  app.use(express.urlencoded({extended:true}))
  app.use(express.json())
}  