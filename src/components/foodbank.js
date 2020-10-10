import React from "react"
import MediaObject from "./mediaobject"
import CardItem from "./card"

export default function FoodbankListItem({ children }) {
    return (
        <div className="tile is-child">
            <CardItem>{children}</CardItem>
        </div>
    )
}
