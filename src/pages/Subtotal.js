import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getCartTotal } from './reducer';

function Subtotal() {
  const [{cart},disptch] = useStateValue();
  
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText = { (value) => (
          <>
           <p >Subtotal ({cart.length} items): <strong>{value}</strong></p>   
           <small className='subtotal-gift'><input className='' type='checkbox'/> This order contains a gift</small>       
           <button ><small>Proceed to Checkout</small></button>
          </>
          
        )}
        decimalScale = {2}
        value={getCartTotal(cart)}
        displayType = {"text"}
        thousandSeparator ={true}
        prefix = {"$"}
      />
    </div>
  )
}

export default Subtotal