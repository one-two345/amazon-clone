export const initialState = {
  cart: []
}
export const getCartTotal = (cart) => cart.reduce((total, item) => item.price +total,0);
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD-TO-CART':
      return ({...state, cart: [...state.cart, action.item]});
    
    case 'REMOVE-FROM-CART':
      return ({...state, cart: [...state.cart.filter(item =>{
        if (item.id === action.id) {return false;}  
        else {return true;}
       })]});
      
    default:
      return state;
  }
};
export default reducer;