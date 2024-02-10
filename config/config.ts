import dotenv from 'dotenv'

dotenv.config()

const MONGO_HOST = process.env.MONGO_HOST || ""
const MONGO_PROJECT_NAME = process.env.MONGO_PASSWORD || ""
const MONGO_URL = `mongodb://${MONGO_HOST}/${MONGO_PROJECT_NAME}`

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 4100

export const config = {
   mongo: {
    url: MONGO_URL
   },
   server: {
    port: SERVER_PORT
   } 
}