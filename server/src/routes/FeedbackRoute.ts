import express from 'express'
import { FeedbackController } from '../controllers'

const router = express.Router()

router.route('/').post(FeedbackController.createFeedback)
router.route('/').get(FeedbackController.getFeedback)
router.route('/:id').put(FeedbackController.editFeedback)

export default router
