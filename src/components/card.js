import React from "react"

export default function CardItem({ children }) {
    return (
        <div class='card'>
            <header class="card-header">
                <h1 class="card-header-title">
                    {children.name}
                </h1>
            </header>

            <div class="card-content">
                <div class="content">
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
            </div>

            <footer class="card-footer">
                <a href={children.url} class="card-footer-item">Donation Link</a>
            </footer>
        </div>
    )
}
