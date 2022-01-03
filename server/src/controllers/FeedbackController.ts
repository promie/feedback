import { Request, Response, NextFunction } from 'express'
import { FeedbackService } from '../services'
import httpStatus from 'http-status'
import { catchAsync } from '../utils'

const createFeedback = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const feedback = await FeedbackService.createFeedback(req.body)
    return res.status(httpStatus.CREATED).json({
      success: true,
      feedback,
    })
  },
)

const getFeedback = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const feedback = await FeedbackService.getFeedback()
    return res.status(httpStatus.OK).json({
      success: true,
      feedback,
    })
  },
)

const editFeedback = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const feedbackId = req.params.id

    const updatedFeedback = await FeedbackService.editFeedback(
      feedbackId,
      req.body,
    )

    return res.status(httpStatus.OK).json({
      success: true,
      feedback: updatedFeedback,
    })
  },
)

const deleteFeedback = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const feedbackId = req.params.id

    await FeedbackService.deleteFeedback(feedbackId)

    return res.status(httpStatus.OK).json({
      success: true,
    })
  },
)

export default {
  createFeedback,
  getFeedback,
  editFeedback,
  deleteFeedback,
}
