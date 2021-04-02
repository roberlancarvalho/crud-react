import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div className="card">
      <div className="card-header">
        {props.header}
      </div>

      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}