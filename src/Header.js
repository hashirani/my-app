import React from 'react';
import logo from "./logo3.png";
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStatevalue } from './StateProvider';

function Header() {
    const [{basket}]= useStatevalue();
    return (
        
        <nav className="header">
          
                <Link to="/">
                    <img  className="header_logo" src={logo} alt="Logo"/>
               </Link>
          
              <div className='header_search'>
                     <input type="text" className='header_sarceInput'/>
                      <SearchIcon className='header_searceIcon'/>     
              </div>
        
              <div className='header__nav'>
               <Link to='/login' className='header__link'>
                   <div className="header__option">
                       <span className="header__optionlineOne">Hello Qazi</span>
                       <span className='header_optionlineTwo'>Sign In</span>
                   </div>
               </Link>
               <Link to='/' className='header__link'>
                   <div className="header__option">
                      
                       <span className="header__optionlineOne">Returns</span>
                       <span className='header_optionlineTwo'> & Orders</span>
                   </div>
               </Link>
               <Link to='/' className='header__link'>
                   <div className="header__option">
                       <span className="header__optionlineOne">Your</span>
                       <span className='header_optionlineTwo'>Prime</span>
                   </div>
               </Link>
               <Link to='/checkout' className='header__link'>
                   <div className="header__optionBasket">
                       <ShoppingBasketIcon></ShoppingBasketIcon>
                  <span className='header_optionlineTwo header__basketCount'>{basket?.length}</span>
                   </div>
               </Link>

           </div>
              

        </nav>
    )
}

export default Header
