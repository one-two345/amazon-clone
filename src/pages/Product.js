import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, price, rating, image}) {

  const [state, disptch] = useStateValue();
  const addToCart = () => (
     disptch({type: 'ADD-TO-CART',
              item: {id: id, title: title, price: price, rating: rating, image: image}})
     );

  return (
    <div className='product'>
      <div className='product-info'>
        <p>{title}</p>
        <p>
        <small>
          $<strong>{price}</strong>
        </small>
        </p>
        <div className='product-rating'>
        {Array(rating).fill().map(() => (<p>S</p> ))}

        </div>
         
       
      </div>
      <img className='product-image' src={image} alt=''/>
      <button className='product-addButton' onClick={addToCart}>Add To Cart</button>
    
    </div>
  )
}

export default Product