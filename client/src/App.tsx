import React, { FC, useState } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { IFeedback } from './types/feedback'
import FeedbackData from './data/FeebackData'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'

const App: FC = () => {
  const [feedback, setFeedback] = useState<IFeedback[]>(FeedbackData)

  const deleteFeedback = (id: number | string | undefined) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item: IFeedback) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback: IFeedback) => {
    newFeedback.id = uuidv4()

    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Provider store={store}>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList handleDelete={deleteFeedback} />
                </>
              }
            />

            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </Provider>
  )
}

export default App
