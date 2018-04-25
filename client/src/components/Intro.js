import React from 'react'

import Button from './Button'

import '../styles/Intro.css'

const buttonStyles = {
  zIndex: 10,
  height: '40px',
  padding: '0 25px',
  fontSize: '16px'
}

export default ({ onClick }) => (
  <div className="intro flex flex--center-x flex--center-y" style={{height: `${window.innerHeight - 60}px`}}>
    <h2 className="intro__title" style={{ zIndex: 10 }}>Let's share your awesome code right now!</h2>
    <Button style={buttonStyles} onClick={onClick}>Share Now</Button>
  </div>
)