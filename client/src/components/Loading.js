import React from 'react'

export default ({ loading }) => (
  <div className={`loading ${loading ? 'loading--animate' : ''}`}></div>
)