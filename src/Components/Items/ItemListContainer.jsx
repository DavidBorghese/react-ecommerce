import React from 'react'
import './ItemListContainer.css'


function ItemListContainer(props) {
  return (
    <h1 className='greeting'>{props.greeting}</h1>
  )
}

export default ItemListContainer