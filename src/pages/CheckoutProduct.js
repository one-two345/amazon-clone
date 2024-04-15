import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, title, price, image, rating}) {
  const [state, dispatch]=useStateValue();
  
  const removeFromCart = () => dispatch({type: 'REMOVE-FROM-CART', id:id})
  return (
    <div className='checkout-product'>
      <img className='checkout-productImage' src={image}/>
      <div className='checkout-productInfo'>
      <p>{title}</p>
        <p><strong>${price}</strong></p>
        <div className='rating'>{Array(rating).fill().map(()=><p>S</p>)}</div> 
        <small><input type='checkbox'/> This is a gift Learn more</small>
        <p><button onClick={removeFromCart}>Remove From Cart </button></p>
        
      </div>
    </div>
  )
}

export default CheckoutProduct