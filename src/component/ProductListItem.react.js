import React, { Component } from 'react'

class ProductListItem extends Component{
    
    render(){


        return(
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">

                                <div className="columns">
                                    <div className="column">
                                        <p>
                                            <strong>ยี่ห้อ : </strong>
                                            <small>
                                                ท่อน้ำไทย
                                                </small>
                                            <br />
                                            <strong>ประเภท : </strong>
                                            <small>
                                                กาว 200 CC
                                                </small>
                                            <br />
                                            1. กล่อง เล็ก บรรจุ 12 กล่อง
                                                <br />
                                            2. กล่อง กลาง บรรจุ 24 กล่อง
                                                <br />
                                            3. กล่อง ใหญ่ บรรจุ 30 กล่อง
                                            </p>
                                    </div>
                                    <div className="column has-text-grey-light">
                                        <h1 className="title">ราคา</h1>
                                        <h2 className="subtitle">1.025</h2>
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

    }
}

export default ProductListItem