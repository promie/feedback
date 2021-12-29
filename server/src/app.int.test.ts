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

    // TODO: FIELDS VALIDATION TESTS && 10 CHARACTER MINIMUM FOR TEXT
  })

  describe('GET /api/v1/feedback', () => {
    beforeEach(async () => {
      // Drop database
      await mongoose.connection.db.dropDatabase()
    })

    it('returns a 200 OK when the list of feedback is successfully retrieved', async () => {
      await request(app).get('/api/v1/feedback').expect(httpStatus.OK)
    })

    it('retrieves the newly created feedback with correct values', async () => {
      await request(app).post('/api/v1/feedback').send({
        rating: 9,
        text: 'This is so good',
      })

      const response = await request(app).get('/api/v1/feedback')
      const feedback = response.body.feedback[0]

      expect(feedback.rating).toBe(9)
      expect(feedback.text).toBe('This is so good')
    })

    it('retrieves the correct number of feedback (2) created in the database', async () => {
      await Promise.all([
        request(app).post('/api/v1/feedback').send({
          rating: 9,
          text: 'This is the sample feedback #1',
        }),
        request(app).post('/api/v1/feedback').send({
          rating: 10,
          text: 'This is the sample feedback #2',
        }),
      ])

      const response = await request(app).get('/api/v1/feedback')

      expect(response.body.feedback.length).toBe(2)
    })

    it('returns the correct fields on the response body', async () => {
      await request(app).post('/api/v1/feedback').send({
        rating: 9,
        text: 'This is so good',
      })

      const response = await request(app).get('/api/v1/feedback')
      const feedback = response.body.feedback[0]

      expect(Object.keys(feedback)).toEqual(['id', 'rating', 'text'])
    })

    // TODO - paginated response
  })
})
