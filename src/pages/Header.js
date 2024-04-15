import React from 'react';
import './Header.css';
import AmazonLogo from "C:/Users/Hello/Desktop/Amazon-Clone/amazon-clone/src/icon-image/amazon-logo.png";
import SearchIcon from "C:/Users/Hello/Desktop/Amazon-Clone/amazon-clone/src/icon-image/search-icon.png";
import CartIcon from "C:/Users/Hello/Desktop/Amazon-Clone/amazon-clone/src/icon-image/cart-icon.png";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{cart}, disptch] = useStateValue();
  return (
    <div className='header'>
      <Link to="/">
        <div className='header-leftSection'>
        <img
            className="header-logo"
            src={AmazonLogo}
            alt='header__logo'
          />
        </div>
      </Link>
      
      
      <div className='header-middleSection'>
        <input  className='header-searchBar' type='text' placeholder='Search'/>
        <button className='header-searchButton'>
        <img className='header-searchIcon' src={SearchIcon} alt=''/>
        </button>
      </div>

      <div className='header-rightSection'>
        <div className='header-rightSectionContainers'>
          <span className='header-rightSectionContainersLineOne'>Hello </span>
          <span className='header-rightSectionContainersLineTwo'>Sign In</span>
        </div>
        <div className='header-rightSectionContainers'>
          <span className='header-rightSectionContainersLineOne'>Returns</span>
          <span className='header-rightSectionContainersLineTwo'>& Orders</span>
        </div>
        <div className='header-rightSectionContainers'>
          <span className='header-rightSectionContainersLineOne'>Your </span>
          <span className='header-rightSectionContainersLineTwo'>Prime</span>
        </div>
        <Link to="/checkout">
          <div className='header-rightSectionCartContainer' >
            <img className='header-rightSectionContainersCartIcon' src={CartIcon}  alt=''/>
            <span className='header-rightSectionContainersLineTwo'>Cart</span>
            <div className='header-rightSectionContainersLineTwo count'>{cart.length}</div>

          </div>
        </Link>
       
      </div>
    </div>
  )
}

export default Header