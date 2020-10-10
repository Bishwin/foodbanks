import React from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"


export default function MediaObject({ children }) {
    return (
        <article className="media">

            <div className="media-content">
                <div className="content">
                    <p className="title">{children.name}</p>
                    <p className="subtitle"><OutboundLink href={children.url}>Donate</OutboundLink></p>
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
            </div>
        </article>
    )
}
