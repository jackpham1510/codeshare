import React from 'react'

import '../styles/List.css'

export default ({ list, page, pagination, total, getListCodeShare }) => (
  <div className="admin">
    <h1 className="admin_title admin_title-center">List CodeShare</h1>
    <p className="admin_status"><small>Total: {total}</small></p>
    <table cellSpacing="1" className="table">
      <thead className="table_header">
        <tr className="table_row">
          <td className="table_no">No.</td>
          <td className="table_link">Link</td>
          <td className="table_lang">Langue</td>
          <td>Content</td>
          <td className="table_update">Last Update</td>
        </tr>
      </thead>
      <tbody className="table_body">
        {list.map((v, i) => (
          <tr className="table_row" key={v.id}>
            <td className="table_no">{page*30 + i+1}</td>
            <td className="table_link"><a href={"./"+v.id}>{v.id}</a></td>
            <td className="table_lang">{v.mode}</td>
            <td>{v.content}</td>
            <td className="table_update">{v.lastUpdate}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {
      pagination === null ? false :
      <div className="pagination">
        {pagination.map((v, i) => (
          <span key={i} className="pagination_item"
          style={{ backgroundColor: (i === page ? '#ec3360': '') }} 
          onClick={e => {
            if (i !== page){
              getListCodeShare(i)
            }
          }}>{v}</span>
        ))}
      </div>  
    }
  </div>
)