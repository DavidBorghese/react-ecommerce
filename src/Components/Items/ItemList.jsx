import React from 'react';
import Item from './Item';

function ItemList({ products }) {
  return (
    <>
    {products.map((product) => {
        return (
            <Item
            key={product.id}
            id={product.id}
            imgurl={product.imgurl}
            title={product.title}
            price={product.price}
            category={product.category}            
            />
        );
      })}
    </>
  )
}

export default ItemList