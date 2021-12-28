import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import httpStatus from 'http-status'
import { morganMiddleware } from './middleware'
import { FeedbackRoute } from './routes'

const app: Application = express()

app.use(express.json())
app.use(cors())
app.use(morganMiddleware)

app.use('/api/v1/feedback', FeedbackRoute)

// Handling Unhandled Routes
app.all('*', (req: Request, res: Response, _next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    error: `Can't find ${req.originalUrl} on this server`,
  })
})

export default app
