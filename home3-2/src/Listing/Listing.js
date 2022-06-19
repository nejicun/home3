import React from 'react'
import Item from './Item/Item'

function Listing(props) {
    const items =  props.items



    console.log(items)
  return (
    <div className="item-list">
        {items.map((item)=> {
            if (item.state === 'active') {
                return (<Item key={item.listing_id} item={item}/>)
            }
        }
        )}
    </div>
  )
}

export default Listing