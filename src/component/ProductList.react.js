import React, { Component } from 'react';
import ProductListItem from './ProductListItem.react';

class ProductList extends Component{

    state ={
        orderProduct : ''
    }

    componentDidMount() {
        


      
    }


    render(){

        let orderProduct = this.props.orderProduct;


        return(
                <div>
                <ProductListItem orderProduct={orderProduct} />
                </div>
             
        )
    }

}
             
export default ProductList