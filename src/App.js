import React, { Component } from 'react';
import Head from './component/Head.react';
import OrderBar from './component/OrderBar.react';
import ProductList from './component/ProductList.react';


class App extends Component {
    render() {
        return (
            <div>
                <section className="hero is-primary">
                
                <Head/>
                </section>
                <section className="section">
                    <div className="container">
                        <OrderBar />
                        
                        <ProductList />
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
