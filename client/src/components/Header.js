import React from 'react'

import Button from './Button'

export default () => (
  <header className="header block--rel">
    <span className="header__title">CodeShare</span>
    <div className="flex flex--right block--abs">
      <Button color="trans"><a href="https://fb.com/cpt.jack1998">Facebook</a></Button>
      <Button color="trans"><a href="https://github.com/tiendung1510">Github</a></Button>
    </div>
  </header>
)