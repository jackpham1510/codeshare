import React from 'react'

import '../styles/Loading.css'

export default ({ loading }) => (
  <div className={`loading ${loading ? 'loading--animate' : ''}`}></div>
)