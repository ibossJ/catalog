import React, { Component } from 'react';

class OrderBar extends Component{

    render(){

        return(
            
               
                <div className="notification">
                    <div className="columns">
                        <div className="column is-4 is-offset-8 has-text-right">

                            <div className="select is-success">
                                <select>
                                    <option value="ASC">ราคา น้อยไปมาก</option>
                                    <option value="DESC">ราคา มากไปน้อย</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                
        )

    }

}

export default OrderBar