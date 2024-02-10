import express, { urlencoded } from "express"
import mongoose from "mongoose"
import { config } from "./config/config"
import Logger from "./lib/logger"

import BookRouter from './routes/Book'

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

  // Middlewares
  app.use(express.urlencoded({extended:true}))
  app.use(express.json())


  // Routes

  app.use('/books', BookRouter)

  // Server connection
  app.listen(config.server.port,() => Logger.info(`Connected to ${config.server.port}`))
}  