import React from 'react'

export default ({ id, title, defaultValue, handleChange, list }) => (
  <div className="setting__item">
    <div className="setting__item-title">{title}</div> 
    <select className="setting__select" name={id} id={id} defaultValue={defaultValue} onChange={e => handleChange(e)}>
      {list.map(v => <option key={v} value={v}>{v}</option>)}
    </select>
  </div>
)