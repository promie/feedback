import request from 'supertest'
import app from './app'
import mongoose from 'mongoose'
import httpStatus from 'http-status'
import { Feedback } from './models'

afterAll(() => {
  mongoose.connection.db.dropDatabase().then(() => {
    mongoose.connection.close()
  })
})

describe('Feedback API Endpoints', () => {
  describe('POST /api/v1/feedback', () => {
    it('returns a 201 CREATED when feedback is successfully created', async () => {
      await request(app)
        .post('/api/v1/feedback')
        .send({
          rating: 10,
          text: 'This is a test feedback',
        })
        .expect(httpStatus.CREATED)
    })

    it('returns success status of true when feedback is successfully created', async () => {
      const response = await request(app).post('/api/v1/feedback').send({
        rating: 10,
        text: 'This is a test feedback',
      })

      expect(response.body.success).toBe(true)
    })

    it('should return the correct response body with correct fields when feedback is created', async () => {
      const response = await request(app).post('/api/v1/feedback').send({
        rating: 10,
        text: 'This is a test feedback',
      })

      expect(Object.keys(response.body.feedback)).toEqual([
        'id',
        'rating',
        'text',
      ])
    })

    it('saves the new feedback to the database', async () => {
      await request(app).post('/api/v1/feedback').send({
        rating: 10,
        text: 'save db',
      })

      const feedback = await Feedback.find({ text: 'save db' })

      expect(feedback.length).toBe(1)
    })
  })
})
