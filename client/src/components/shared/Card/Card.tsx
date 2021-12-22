import React, { FC } from 'react'

interface ICardProps {
  children: any
  reverse?: boolean
}

const Card: FC<ICardProps> = ({ children, reverse }) => {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
}

Card.defaultProps = {
  reverse: false,
}

export default Card
