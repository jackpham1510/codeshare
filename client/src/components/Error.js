import React from 'react'

import Button from './Button'

const buttonStyles = {
  zIndex: 10,
  height: '40px',
  padding: '0 25px',
  fontSize: '16px'
}

export default ({ message }) => (
  <div className="intro flex flex--center-x flex--center-y" style={{height: `${window.innerHeight - 60}px`}}>
    <h2 className="intro__title" style={{ zIndex: 10 }}>{message}</h2>
    <Button style={buttonStyles} onClick={e => (window.location.pathname = '/')}>Go to Home Page</Button>
  </div>
)