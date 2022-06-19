import React from 'react'

function Item(props) {
    const item = props.item;
    console.log(item)
    const codePriceFormatter = (item) => {
        if (item.currency_code === 'USD') {
            return '$' + item.price
        } else if (item.currency_code === 'EUR') {
            return '€' + item.price
        } else {
            return item.price + ' GBP'
        }
    }

    const quantityFormatter = (quantity) => {
        const quantityItem = (quantity <= 10) ? 'level-low' :
            (quantity >= 20) ? 'level-medium' : 'level-high'  
    
        return quantityItem + 'item-quantity'
    }

    const titleFormatter = (title) => {
        const newTitle = (title.length >= 50) ? title.substring(0,50) + '...' : title
        return  newTitle
    }

  return (
    <div className="item">
        <div className="item-image">
        <a href={item.url}>
            <img src={item.MainImage.url_570xN}/>
        </a>
        </div>
        <div className="item-details">
            <p className="item-title">{titleFormatter(item.title)}</p>
            <p className="item-price">{codePriceFormatter(item)}</p>
            <p className={quantityFormatter(item.quantity)}>{item.quantity}</p>
        </div>
    </div>
  )
}

export default Item