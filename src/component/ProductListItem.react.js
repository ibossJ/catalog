import React, { Component } from 'react'
import {fetchRepository} from './../api/index'

class ProductListItem extends Component{
    
    state = {
        product : [],
    }

    componentDidMount(){

        console.log(this.props)
        

        fetchRepository()
        .then((product) => {
           
            this.setState({
                product: product.Product
            })
        })

    }


    render(){

        let orderProduct = this.props.orderProduct;
        
        let productList = this.state.product.sort((a, b) => {
                                                         
                                                            if(orderProduct === 'ASC'){

                                                                return a.price - b.price;

                                                            }
                                                            else{

                                                                return b.price - a.price;

                                                            }
                                                        });
        console.log(productList);
       /* const {
            brand = 'Loading..',
            type,
            price,
            detail,
            url_image = 'https://bulma.io/images/placeholders/128x128.png'
        } = productDetail;*/
        
        return(
               
                
                <div>
                {productList.map((productDetail) => {
                    const {
                        brand = 'Loading..555',
                        type,
                        price,
                        detail,
                        url_image = 'https://bulma.io/images/placeholders/128x128.png'
                    } = productDetail;

                    return (
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-128x128">
                                        <img src={productDetail.url_image} tmp="" alt="Image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">

                                        <div className="columns">
                                            <div className="column">
                                                <p>
                                                    <strong>ยี่ห้อ :  </strong>
                                                    <small>{productDetail.brand}</small>
                                                    <br />
                                                    <strong>ประเภท : </strong>
                                                    <small>{productDetail.type} </small>
                                                    <br />
                                                    {productDetail.detail}
                                                </p>
                                            </div>
                                            <div className="column has-text-grey-light">
                                                <h1 className="title">ราคา</h1>
                                                <h2 className="subtitle">{productDetail.price}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">
                                            <a className="level-item" aria-label="reply">
                                                <span className="icon is-small">
                                                    <i className="fas fa-reply" aria-hidden="true"></i>
                                                </span>


                                            </a>
                                            <a className="level-item" aria-label="retweet">
                                                <span className="icon is-small">
                                                    <i className="fas fa-retweet" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                            <a className="level-item" aria-label="like">
                                                <span className="icon is-small">
                                                    <i className="fas fa-heart" aria-hidden="true"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    )
                })}
                </div>

            )    
        

    }
}

export default ProductListItem