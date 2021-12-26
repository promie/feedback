import app from './app'
import http from 'http'
import { Logger } from './utils'

const PORT = process.env.PORT || 5000

const startServer = async (): Promise<http.Server> => {
  return app.listen(PORT, () => {
    Logger.info(`Server is running on port ${PORT}`)
  })
}

startServer()
