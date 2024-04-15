import React from 'react';
import './Checkout.css'
import CheckoutAd from 'C:/Users/Hello/Desktop/Amazon-Clone/amazon-clone/src/templates/hc.jpg'
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{cart},disptch] =useStateValue();

  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <div className='checkout-Ad'>
          <img  src={CheckoutAd} alt=''/> 
          <h2 className='checkout-title'>Shopping Cart </h2>
        </div>
        
        {cart.map((item) =><CheckoutProduct id = {item.id} title ={item.title} price={item.price} image={item.image} rating={item.rating}  />)}
      </div>
      <div className='checkout-right'>
        <Subtotal/>
      </div>

    </div>
  );
}

export default Checkout;