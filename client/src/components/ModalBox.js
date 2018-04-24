import React from 'react'

import Button from './Button'

import failLogo from '../img/confused.svg'
import successLogo from '../img/cool.svg'

export default ({ message, success, closeModalBox }) => (
  <div className="modalbox" style={{ display: message ? 'flex' : 'none' }}>
    <div className="modalbox__icon"><img src={success ? successLogo : failLogo} alt="icon"/></div>
    <div className="modalbox__message">{message || 'There are some text message for some method of app'}</div>
    <Button color="trans" style={{ width: '100%' }} onClick={closeModalBox}>Close</Button>
  </div>
)