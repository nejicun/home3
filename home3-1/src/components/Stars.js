import React from 'react'
import Star from './Star'

function Stars(props) {
  return (
    <div>
      <ul className="card-body-stars u-clearfix">
            { [...Array(props.count)].map((index) => <Star key={index}/>) }
       </ul>
    </div>
  )
}

export default Stars