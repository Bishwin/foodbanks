import React from "react"
import CardItem from "./card"
import MediaObject from "./mediaobject"

export default function FoodbankListItem({ children }) {
    return (
        <MediaObject>{children}</MediaObject>
    )
}
