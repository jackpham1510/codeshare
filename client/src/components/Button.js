import React from 'react'

import '../styles/Button.css'

export default ({ children, color, onClick, style }) => (
  <button className={`button button--${color || 'pink'}`} onClick={onClick} style={style}>
    {children}
  </button>
)