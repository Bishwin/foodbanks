import React from "react"

export default function CardItem({ children }) {
    return (
        <div className='card'>

            <div className="card-content">
                <div className="media-content">
                <p className="title is-4">{children.name}</p>
                <p className="subtitle is-6"><a href={children.url}>Donate</a></p>
            </div>

            <div className='columns'>
            <div className='column'>
                <div className='content'>
                    <h6>Urgently Needed</h6>
                    <ul>
                        {children.wanted.map((data, index) => {
                            return <li key={`content_item_${index}`}>{data}</li>
                        })}
                    </ul>
                </div>
            </div>

            <div className='column'>
                <div className='content'>
                    <h6>Unwanted</h6>
                    <ul>
                        {children.unwanted.map((data, index) => {
                            return <li key={`content_item_${index}`}>{data}</li>
                        })}
                    </ul>
                </div>
            </div>
            </div>
        
            <div className="content">
                <time dateTime="2016-1-1"><small>Last scraped @ {children.date}</small></time>
            </div>
        </div>
    </div>
    )
}
