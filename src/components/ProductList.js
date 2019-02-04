import React, { Component } from 'react';
import Product from './Product';
import {ButtonContainer} from './StyledComponent'
export default class ProductList extends Component {
  state={
    Product:[]
  }
  render() {
    return (
      <React.Fragment>
        <div className="py-5">This page is under construction.</div>
        <ButtonContainer>
          submit
        </ButtonContainer>
      </React.Fragment>
    )
  }
}
