import React, { ChangeEvent, FC, useState } from 'react'
import { IFeedback } from '../../types/feedback'
import RatingSelect from '../RatingSelect'
import Card from '../shared/Card'
import Button from '../shared/Button'

interface IFeedbackFormProps {
  handleAdd: (feedback: IFeedback) => void
}

const FeedbackForm: FC<IFeedbackFormProps> = ({ handleAdd }) => {
  const [text, setText] = useState<string>('')
  const [rating, setRating] = useState<number>(10)
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
  const [message, setMessage] = useState<string | null>('')

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      handleAdd(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type={'submit'} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
