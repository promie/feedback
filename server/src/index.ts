import app from './app'
import Mongoose from './config/db'
import http from 'http'
import { Logger } from './utils'

const PORT = process.env.PORT || 5000

const startServer = async (): Promise<http.Server> => {
  await Mongoose().initialiseMongoConnection()
  return app.listen(PORT, () => {
    Logger.info(`Server is running on port ${PORT}`)
  })
}

startServer()
