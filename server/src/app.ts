import express, { Application } from 'express'
import cors from 'cors'
import { FeedbackRoute } from './routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1/feedback', FeedbackRoute)

export default app
