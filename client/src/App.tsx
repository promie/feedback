import React, { FC } from 'react'
import Header from './components/Header'

const App: FC = () => {
  return (
    <>
      <Header text="Feedback UI" />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  )
}

export default App
