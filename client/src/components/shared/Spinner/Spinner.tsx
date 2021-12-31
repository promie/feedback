import React, { FC } from 'react'
import spinner from '../../../assets/spinner.gif'

const Spinner: FC = () => {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: '100px',
        margin: 'auto',
        display: 'block',
      }}
    />
  )
}

export default Spinner
