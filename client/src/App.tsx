import React, { FC } from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackProvider from './contexts/Feedback'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'

const App: FC = () => {
  return (
    <FeedbackProvider>
      <Provider store={store}>
        <Router>
          <Header text="Feedback UI" />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              />

              <Route path="/about" element={<AboutPage />} />
            </Routes>

            <AboutIconLink />
          </div>
        </Router>
      </Provider>
    </FeedbackProvider>
  )
}

export default App
