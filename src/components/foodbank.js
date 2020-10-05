import React from "react"
import { Link } from "gatsby"

export default function FoodbankListItem({ children }) {
    console.log(children)
    return (
        <div class='columns'>
            <Link to={children.url}><h1 class="title">{children.name}</h1></Link>
            <div class='column'>
                <div class='content'>
                    <h3>Urgently Needed</h3>
                    <ul>
                    {children.wanted.map((data, index) => {
                        return <li key={'content_item_${index}'}>{data}</li>
                    })}
                    </ul>
                </div>
            </div>
            <div class='column'>
                <div class='content'>
                    <h3>Unwanted</h3>
                    <ul>
                        {children.unwanted.map((data, index) => {
                            return <li key={'content_item_${index}'}>{data}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
