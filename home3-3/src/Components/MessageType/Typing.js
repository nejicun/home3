import React from 'react'

function Typing(props) {
    const message = props.message;
    const from = props.from
  return (
    <>
         <div className="message-data">
            <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
            <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">
            Набирает сообщение ...
        </div>
    </>
  )
}

export default Typing