import React from "react"

export default function CardItem({ children }) {
    return (
        <div class='card'>

            <div class="card-content">
                <div class="media-content">
                <p class="title is-4">{children.name}</p>
                <p class="subtitle is-6"><a href={children.url}>Donate</a></p>
            </div>

            <div class='columns'>
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
        
            <div class="content">
                <time datetime="2016-1-1"><small>Last scraped @ {children.date}</small></time>
            </div>
        </div>
    </div>
    )
}
