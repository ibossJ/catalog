import React, { Component } from 'react';

class Header extends Component {
    
    render(){
        return(
            
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Company</h1>
                        <h2 className="subtitle">subtitle</h2>
                    </div>
                    <div className="field">
                        <label className="label"></label>
                        <div className="control">
                            <input className="input is-rounded" type="text" placeholder="ค้นหา" />
                        </div>
                        <p className="help">ยี่ห้อ, ประเภท</p>
                    </div>
                </div>
           
       ) 
    }

}

export default Header
