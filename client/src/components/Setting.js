import React from 'react'

export default ({ setting, children }) => (
  <div className="setting flex" style={{ height: setting ? (window.innerWidth <= 880 ? '240px': '80px') : 0 }}>
    {children}
  </div>
)