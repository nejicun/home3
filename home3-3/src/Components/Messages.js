import React from 'react'
import Message from './MessageType/Message'
import Response from './MessageType/Response'
import Typing from './MessageType/Typing'

function Messages(props) {
    const items = props.messages
    console.log(items)

  return (
    <ul>
        {items.map ((item)=> 
           {if (item.type === 'message') {return(<Message key={item.id} from={item.from} message={item}/>)}
           else if (item.type === 'typing') {return(<Typing key={item.id} from={item.from} message={item}/> )}
           else if (item.type === 'response') {return(<Response key={item.id} from={item.from} message={item}/>) }}
        )} 
    </ul>
  )
}

export default Messages