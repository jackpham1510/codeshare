import React from 'react'

export default ({ children, color, onClick, style }) => (
  <button className={`button button--${color || 'pink'}`} onClick={onClick} style={style}>
    {children}
  </button>
)