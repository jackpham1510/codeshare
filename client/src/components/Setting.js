import React from 'react'

import '../styles/Setting.css'

export default ({ setting, children }) => (
  <div className="setting flex" style={{ height: setting ? (window.innerWidth <= 880 ? '320px': '90px') : 0 }}>
    {children}
  </div>
)