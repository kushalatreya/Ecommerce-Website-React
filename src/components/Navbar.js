import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
/* import styled from 'styled-components'; */
import { ButtonContainer, NavWrapper} from './StyledComponent'

//icon used is from the website so crediting the author in comments.
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          {
            /* <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */
          }
          <Link to="/">
            <img src={logo} alt="store" className='navbar navbar-brand' height="40" width="60" />
          </Link>
        <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to ='/' className='nav-link'>Product</Link>
            </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
              <i className="fas fa-cart-plus">my cart</i>
          </ButtonContainer>
        </Link>

        </NavWrapper>
      </div>
    );
  }
}


