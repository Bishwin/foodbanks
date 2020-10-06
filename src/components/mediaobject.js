import React from "react"

export default function MediaObject({ children }) {
    return (
        <article className="media">

            <div className="media-content">
                <div className="content">
                    {/* <h1 className="title">{children.name}</h1>                  */}
                    <p>
                        <strong className="title">{children.name}</strong> <small><a href={children.url}>Donate</a></small>
                        <br/>
                    </p>
                </div>
                <div class="columns">

                    <div class='column'>
                        <div class='content'>
                            <h6>Urgently Needed</h6>
                            <ul>
                            {children.wanted.map((data, index) => {
                                return <li key={`content_item_${index}`}>{data}</li>
                            })}
                            </ul>
                        </div>
                    </div>

                    <div class='column'>
                        <div class='content'>
                            <h6>Unwanted</h6>
                            <ul>
                            {children.unwanted.map((data, index) => {
                                return <li key={`content_item_${index}`}>{data}</li>
                            })}
                            </ul>
                        </div>
                    </div>

                </div>
{/* 
                <nav className="level is-mobile">
                    <div className="level-left">
                        <a className="level-item">
                        <span className="icon is-small"><i className="fas fa-reply"></i></span>
                        </a>
                        <a className="level-item">
                        <span className="icon is-small"><i className="fas fa-retweet"></i></span>
                        </a>
                        <a className="level-item">
                        <span className="icon is-small"><i className="fas fa-heart"></i></span>
                        </a>
                    </div>
                </nav> */}
            </div>
{/* 
            <div className="media-right">
                <button className="delete"></button>
            </div> */}
        </article>
    )
}
